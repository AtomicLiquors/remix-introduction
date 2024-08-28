import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig(() => {
  return {

    /* Vercel 환경 변수 세팅 : 작동하지 않음. */
    /* https://vercel.com/docs/frameworks/vite#environment-variables */
    define: {
      __VITE_CONTACT__: JSON.stringify(process.env.VITE_CONTACT),
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
