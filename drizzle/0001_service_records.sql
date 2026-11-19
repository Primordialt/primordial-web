CREATE TABLE "installation" (
	"id" text PRIMARY KEY NOT NULL,
	"customerUserId" text NOT NULL,
	"siteName" text NOT NULL,
	"address" text NOT NULL,
	"kitSerial" text,
	"installedOn" date,
	"status" text DEFAULT 'planned' NOT NULL,
	"notes" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "installation_status_check" CHECK ("installation"."status" in ('planned', 'installed', 'inactive'))
);
--> statement-breakpoint
CREATE TABLE "serviceProfile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"phone" text,
	"serviceAddress" text,
	"starlinkAccountRef" text,
	"notes" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "serviceProfile_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "serviceRecord" (
	"id" text PRIMARY KEY NOT NULL,
	"installationId" text NOT NULL,
	"performedOn" date NOT NULL,
	"summary" text NOT NULL,
	"details" text,
	"recordedByUserId" text,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "installation" ADD CONSTRAINT "installation_customerUserId_user_id_fk" FOREIGN KEY ("customerUserId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "serviceProfile" ADD CONSTRAINT "serviceProfile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "serviceRecord" ADD CONSTRAINT "serviceRecord_installationId_installation_id_fk" FOREIGN KEY ("installationId") REFERENCES "public"."installation"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "serviceRecord" ADD CONSTRAINT "serviceRecord_recordedByUserId_user_id_fk" FOREIGN KEY ("recordedByUserId") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "installation_customer_user_id_idx" ON "installation" USING btree ("customerUserId");--> statement-breakpoint
CREATE INDEX "service_record_installation_id_idx" ON "serviceRecord" USING btree ("installationId");