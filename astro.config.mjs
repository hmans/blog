import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), turbolinks()],
});
