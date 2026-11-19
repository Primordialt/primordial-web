import { loadLocalEnv } from "./load-env";
import { isPortalRole } from "../lib/internet/access";
import { createPortalAccount, PortalAccountError } from "../lib/internet/provision";
import { provisionInputSchema } from "../lib/internet/validation";

loadLocalEnv();

function readArg(flag: string): string | undefined {
  const index = process.argv.indexOf(flag);
  if (index === -1) return undefined;
  const value = process.argv[index + 1];
  if (!value || value.startsWith("--")) return undefined;
  return value;
}

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

async function main() {
  const name = readArg("--name");
  const email = readArg("--email");
  const role = readArg("--role");
  const password = process.env.PORTAL_USER_PASSWORD;

  if (!name || !email || !role) {
    fail(
      "Usage: set PORTAL_USER_PASSWORD, then npm run portal:create-user -- --name \"Full Name\" --email \"person@example.com\" --role customer|staff|admin",
    );
  }

  if (!password) {
    fail("Set PORTAL_USER_PASSWORD in the environment for this command. Do not pass the password as an argument.");
  }

  if (!isPortalRole(role)) {
    fail("Role must be customer, staff, or admin.");
  }

  if (role === "admin" && process.env.ALLOW_ADMIN_BOOTSTRAP !== "1") {
    fail(
      "Refusing to create an administrator. Set ALLOW_ADMIN_BOOTSTRAP=1 for this command only. The portal cannot create administrators.",
    );
  }

  const parsed = provisionInputSchema.safeParse({ name, email, password, role });

  if (!parsed.success) {
    fail(
      "Name must be 2–120 characters, email must be valid, and the password must be 12–128 characters.",
    );
  }

  try {
    const created = await createPortalAccount({
      name: parsed.data.name,
      email: parsed.data.email,
      password: parsed.data.password,
      role,
    });
    console.log(`Created ${created.role} account ${created.email} (${created.id}).`);
    console.log("Unset PORTAL_USER_PASSWORD before continuing.");
  } catch (error) {
    if (error instanceof PortalAccountError) fail(error.message);
    fail("The account could not be created. Check DATABASE_URL and that migrations have been applied.");
  }
}

void main();
