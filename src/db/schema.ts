import { relations } from "drizzle-orm";
import * as pg from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

export const users = pg.pgTable("user", {
  id: pg
    .text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: pg.text("name"),
  email: pg.text("email").unique(),
  emailVerified: pg.timestamp("emailVerified", { mode: "date" }),
  image: pg.text("image"),
});

export const accounts = pg.pgTable(
  "account",
  {
    userId: pg
      .text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: pg.text("type").$type<AdapterAccountType>().notNull(),
    provider: pg.text("provider").notNull(),
    providerAccountId: pg.text("providerAccountId").notNull(),
    refresh_token: pg.text("refresh_token"),
    access_token: pg.text("access_token"),
    expires_at: pg.integer("expires_at"),
    token_type: pg.text("token_type"),
    scope: pg.text("scope"),
    id_token: pg.text("id_token"),
    session_state: pg.text("session_state"),
  },
  (account) => [
    {
      compoundKey: pg.primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    },
  ],
);

export const sessions = pg.pgTable("session", {
  sessionToken: pg.text("sessionToken").primaryKey(),
  userId: pg
    .text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: pg.timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pg.pgTable(
  "verificationToken",
  {
    identifier: pg.text("identifier").notNull(),
    token: pg.text("token").notNull(),
    expires: pg.timestamp("expires", { mode: "date" }).notNull(),
  },
  (verificationToken) => [
    {
      compositePk: pg.primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    },
  ],
);

export const authenticators = pg.pgTable(
  "authenticator",
  {
    credentialID: pg.text("credentialID").notNull().unique(),
    userId: pg
      .text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    providerAccountId: pg.text("providerAccountId").notNull(),
    credentialPublicKey: pg.text("credentialPublicKey").notNull(),
    counter: pg.integer("counter").notNull(),
    credentialDeviceType: pg.text("credentialDeviceType").notNull(),
    credentialBackedUp: pg.boolean("credentialBackedUp").notNull(),
    transports: pg.text("transports"),
  },
  (authenticator) => [
    {
      compositePK: pg.primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    },
  ],
);

export const usersRelations = relations(users, ({ many }) => ({
  characters: many(characters),
}));

export const characters = pg.pgTable("characters", {
  autorId: pg.text("autor_id").notNull(),
  id: pg.integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: pg.varchar("name", { length: 255 }),
  class: pg.varchar("class", { length: 255 }),
  level: pg.integer("level"),
  species: pg.varchar("species", { length: 255 }),
});

export const charactersRelations = relations(characters, ({ one }) => ({
  autor: one(users, {
    fields: [characters.autorId],
    references: [users.id],
  }),
}));

// Spells

// Define the spell levels as a union type for type safety
export const spellLevels = [
  "Cantrip",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
] as const;

// Define the spell schools as a union type
export const spellSchools = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Necromancy",
  "Transmutation",
] as const;

// Define the spell components
export const spellComponents = ["V", "S", "M"] as const;

// Define the spell casting times
export const castingTimes = [
  "1 action",
  "1 bonus action",
  "1 reaction",
  "1 minute",
  "10 minutes",
  "1 hour",
  "8 hours",
  "12 hours",
  "24 hours",
] as const;

// Define the spell durations
export const durations = [
  "Instantaneous",
  "1 round",
  "6 rounds",
  "1 minute",
  "10 minutes",
  "1 hour",
  "8 hours",
  "24 hours",
  "7 days",
  "10 days",
  "30 days",
  "Special",
  "Until dispelled",
  "Until triggered",
] as const;

// Define the spell ranges
export const ranges = [
  "Self",
  "Touch",
  "5 feet",
  "10 feet",
  "30 feet",
  "60 feet",
  "90 feet",
  "100 feet",
  "120 feet",
  "150 feet",
  "300 feet",
  "500 feet",
  "1 mile",
  "Sight",
  "Unlimited",
  "Special",
] as const;

// Define the damage types
export const damageTypes = [
  "acid",
  "bludgeoning",
  "cold",
  "fire",
  "force",
  "lightning",
  "necrotic",
  "piercing",
  "poison",
  "psychic",
  "radiant",
  "slashing",
  "thunder",
] as const;

// Define the saving throw types
export const savingThrowTypes = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
  "none",
] as const;

// Define the spell attack types
export const attackTypes = ["melee", "ranged", "none"] as const;

// Main spells table
export const spells = pg.pgTable("spells", {
  id: pg.serial("id").primaryKey(),
  name: pg.varchar("name", { length: 100 }).notNull().unique(),
  level: pg.varchar("level", { length: 10, enum: spellLevels }).notNull(),
  school: pg.varchar("school", { length: 15, enum: spellSchools }).notNull(),
  castingTime: pg
    .varchar("casting_time", { length: 20, enum: castingTimes })
    .notNull(),
  range: pg.varchar("range", { length: 20, enum: ranges }).notNull(),
  components: pg.varchar("components", { length: 10 }).array().notNull(), // V, S, M
  materialComponent: pg.text("material_component"),
  duration: pg.varchar("duration", { length: 20, enum: durations }).notNull(),
  concentration: pg.boolean("concentration").default(false).notNull(),
  ritual: pg.boolean("ritual").default(false).notNull(),
  description: pg.text("description").notNull(),
  higherLevels: pg.text("higher_levels"),
  damageType: pg.varchar("damage_type", { length: 15, enum: damageTypes }),
  savingThrow: pg.varchar("saving_throw", {
    length: 15,
    enum: savingThrowTypes,
  }),
  attackType: pg.varchar("attack_type", { length: 10, enum: attackTypes }),
  damageAtSlotLevel: pg.jsonb("damage_at_slot_level"), // JSON structure for scaling damage
  damageAtCharacterLevel: pg.jsonb("damage_at_character_level"), // JSON for cantrips
  areaOfEffect: pg.jsonb("area_of_effect"), // { type: 'sphere', size: 20 }
  classes: pg.varchar("classes", { length: 50 }).array().notNull(), // ['Wizard', 'Sorcerer']
  source: pg
    .varchar("source", { length: 50 })
    .notNull()
    .default("Player's Handbook"),
  page: pg.integer("page"),
  createdAt: pg.timestamp("created_at").defaultNow().notNull(),
  updatedAt: pg.timestamp("updated_at").defaultNow().notNull(),
});
