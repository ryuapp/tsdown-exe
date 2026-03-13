import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/cli.ts"],
  exe: {
    targets: [
      { platform: "linux", arch: "x64", nodeVersion: "25.7.0" },
      { platform: "darwin", arch: "arm64", nodeVersion: "25.7.0" },
      { platform: "win", arch: "x64", nodeVersion: "25.7.0" },
    ],
  },
});
