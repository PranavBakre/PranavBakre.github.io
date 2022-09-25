import esbuild from "esbuild"
import fs from "fs"
import * as dotenv from "dotenv"

dotenv.config()


const properties = {}
Object.keys(process.env).forEach((key) => {
  if(key.startsWith("CUSTOM_")) {
    properties[key] = JSON.stringify(process.env[key]);
  }
})
0-
fs.rmSync("dist", {recursive: true, force: true})
await esbuild.build({
    entryPoints: ['index.jsx'],
    bundle: true,
    outfile: 'dist/app.js',
    sourcemap: true,
    define: properties
  }).catch(() => console.log("Test"))
fs.copyFileSync("index.html", "dist/index.html")