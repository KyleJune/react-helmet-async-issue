import * as esbuild from "https://deno.land/x/esbuild@v0.14.34/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.4.2/mod.ts";

await esbuild.build({
  plugins: [denoPlugin()],
  entryPoints: [
    './main.jsx',
    './c.jsx',
    './d.jsx',
  ],
  outdir: "./client",
  bundle: true,
  splitting: true,
  sourcemap: "external",
  format: "esm",
});
esbuild.stop();
