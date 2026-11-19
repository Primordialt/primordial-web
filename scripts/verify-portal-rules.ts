import assert from "node:assert/strict";

import {
  authorizeProvision,
  authorizeStatusChange,
  canManageServiceFile,
  normalizeEmail,
  portalHomeForRole,
  signInFailureMessage,
} from "../lib/internet/access";

assert.equal(normalizeEmail("  Ada@Example.com "), "ada@example.com");
assert.equal(normalizeEmail("not-an-email"), null);

assert.equal(portalHomeForRole("customer"), "/internet/dashboard");
assert.equal(portalHomeForRole("staff"), "/internet/admin");
assert.equal(portalHomeForRole("admin"), "/internet/admin");

const staffAdmin = authorizeProvision("staff", "admin");
const staffStaff = authorizeProvision("staff", "staff");
const staffCustomer = authorizeProvision("staff", "customer");
const adminAdmin = authorizeProvision("admin", "admin");
const adminStaff = authorizeProvision("admin", "staff");
const customerAny = authorizeProvision("customer", "customer");

assert.equal(staffAdmin.ok, false);
assert.equal(staffStaff.ok, false);
assert.equal(staffCustomer.ok, true);
assert.equal(adminAdmin.ok, false);
assert.equal(adminStaff.ok, true);
assert.equal(customerAny.ok, false);

if (staffCustomer.ok) assert.equal(staffCustomer.role, "customer");
if (adminStaff.ok) assert.equal(adminStaff.role, "staff");

assert.equal(
  authorizeStatusChange({
    actorId: "staff-1",
    actorRole: "staff",
    targetId: "staff-2",
    targetRole: "staff",
    nextStatus: "disabled",
  }).ok,
  false,
);

assert.equal(
  authorizeStatusChange({
    actorId: "admin-1",
    actorRole: "admin",
    targetId: "admin-1",
    targetRole: "admin",
    nextStatus: "disabled",
  }).ok,
  false,
);

assert.equal(
  authorizeStatusChange({
    actorId: "admin-1",
    actorRole: "admin",
    targetId: "customer-1",
    targetRole: "customer",
    nextStatus: "disabled",
  }).ok,
  true,
);

assert.deepEqual(signInFailureMessage(200), null);
assert.deepEqual(signInFailureMessage(429), null);
assert.equal(signInFailureMessage(401)?.message, "Invalid email or password.");
assert.equal(signInFailureMessage(403)?.status, 401);

assert.equal(canManageServiceFile("customer"), false);
assert.equal(canManageServiceFile("staff"), true);
assert.equal(canManageServiceFile("admin"), true);

console.log("Portal access rules passed.");
