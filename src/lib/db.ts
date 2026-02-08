import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  const sql = neon(databaseUrl);
  return drizzle(sql, { schema });
}

// Lazy initialization: only create db instance if DATABASE_URL is available
export const db = typeof process !== 'undefined' && process.env.DATABASE_URL
  ? getDb()
  : (null as unknown as ReturnType<typeof getDb>);

// Helper function to get database instance with runtime check
export function getDatabase() {
  return getDb();
}
