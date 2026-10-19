import { neon } from "@neondatabase/serverless";

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is missing. Set it in .env.local or Vercel Environment Variables.");
  }
  return neon(url);
}
