import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
// Import /serverless for a Serverless SSR site
// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
});
