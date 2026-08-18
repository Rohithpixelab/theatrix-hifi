import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["drizzle-kit", "esbuild", "@libsql/client"],
};

export default withPayload(nextConfig);
