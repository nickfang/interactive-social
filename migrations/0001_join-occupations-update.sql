CREATE TABLE IF NOT EXISTS "actual_occupations" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expected_occupations" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "join_occupations" (
	"id" serial PRIMARY KEY NOT NULL,
	"expected_occupation_id" integer NOT NULL,
	"actual_occupation_id" integer NOT NULL,
	"user_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join_occupations" ADD CONSTRAINT "join_occupations_expected_occupation_id_expected_occupations_id_fk" FOREIGN KEY ("expected_occupation_id") REFERENCES "public"."expected_occupations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join_occupations" ADD CONSTRAINT "join_occupations_actual_occupation_id_actual_occupations_id_fk" FOREIGN KEY ("actual_occupation_id") REFERENCES "public"."actual_occupations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "join_occupations" ADD CONSTRAINT "join_occupations_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> manually added because of wrong foreign keys in 0000_closed+nekra.sql migration
DO $$ BEGIN
 ALTER TABLE "join_occupations" DROP CONSTRAINT "join_occupations_actual_occupation_id_users_id_fk";
 ALTER TABLE "join_occupations" DROP CONSTRAINT "join_occupations_actual_occupation_id_users_id_fk";
END $$;
