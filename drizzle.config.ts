import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config({ path: ".env" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/utils/schema.ts",
  out: "./src/drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
