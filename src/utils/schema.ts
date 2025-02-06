import { InferSelectModel, sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  integer,
  jsonb,
  pgPolicy,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const teams = pgTable("teams", {
  id: bigint("id", { mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const teamMembers = pgTable("team_members", {
  teamId: bigint("team_id", { mode: "bigint" }).notNull(),
  userId: text("user_id").notNull(),
  role: text("role").notNull(),
  joinedAt: timestamp("joined_at", { withTimezone: true }).defaultNow().notNull(),
}, (t) => ({
  primaryKey: [t.teamId, t.userId],
}));

export const projects = pgTable("projects", {
  id: bigint("id", { mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity(),
  teamId: bigint("team_id", { mode: "bigint" }).notNull(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tasks = pgTable("tasks", {
  id: bigint("id", { mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity(),
  projectId: bigint("project_id", { mode: "bigint" }).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull(),
  assignedTo: text("assigned_to"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const aiTools = pgTable("ai_tools", {
  id: bigint("id", { mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity(),
  name: text("name").notNull(),
  description: text("description"),
  pricePerUse: integer("price_per_use").default(0).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const userCredits = pgTable("user_credits", {
  userId: text("user_id").primaryKey(),
  credits: integer("credits").default(0).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const toolUsage = pgTable("tool_usage", {
  id: bigint("id", { mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity(),
  userId: text("user_id").notNull(),
  toolId: bigint("tool_id", { mode: "bigint" }).notNull().references(() => aiTools.id),
  inputData: jsonb("input_data"),
  outputData: jsonb("output_data"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Team = InferSelectModel<typeof teams>;
export type TeamMember = InferSelectModel<typeof teamMembers>;
export type Project = InferSelectModel<typeof projects>;
export type Task = InferSelectModel<typeof tasks>;
export type AiTool = InferSelectModel<typeof aiTools>;
export type UserCredit = InferSelectModel<typeof userCredits>;
export type ToolUsage = InferSelectModel<typeof toolUsage>;