import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.CONTACT": JSON.stringify(env.CONTACT),
    },
    plugins: [
      remix({
        ignoredRouteFiles: ["**/*.css"],
      }),
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "app"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  };
});
