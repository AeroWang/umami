import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: ['./db/cloudflare-d1/schema.ts'],
  out: './d1-migrations',
  migrations: {
    prefix: 'timestamp',
  },
});
