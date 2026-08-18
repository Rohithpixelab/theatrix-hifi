import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

import sharp from "sharp";
import { Users } from "./src/payload/collections/Users";
import { Media } from "./src/payload/collections/Media";
import { Categories } from "./src/payload/collections/Categories";
import { Projects } from "./src/payload/collections/Projects";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories, Projects],
  editor: lexicalEditor({}),
  sharp,
  secret: process.env.PAYLOAD_SECRET || "fallback-payload-secret-theatrixhifi-32chars",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString:
        process.env.DATABASE_URI ||
        process.env.POSTGRES_URL ||
        "postgresql://postgres:postgres@127.0.0.1:5432/theatrixhifi",
      ssl: process.env.DATABASE_URI?.includes("supabase")
        ? { rejectUnauthorized: false }
        : false,
    },
  }),
});
