/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_h5BQAzc3uJdt@ep-damp-fire-a8pu9wm5.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};
