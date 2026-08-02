import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  pickup: text("pickup").notNull(),
  drop: text("drop").notNull(),
  datetime: text("datetime").notNull(),
  carType: text("car_type"),
  tripType: text("trip_type"),
  source: text("source").default("form"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
