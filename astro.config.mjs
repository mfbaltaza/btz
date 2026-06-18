import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel";

// https://astro.build/config
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), icon()],
  output: "server",
  adapter: vercel()
});
