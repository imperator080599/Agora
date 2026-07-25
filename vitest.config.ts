import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  test: {
    include: ["packages/**/*.test.ts"],
    environment: "node",
  },
  resolve: {
    alias: {
      "@agora/fixtures": r("./packages/fixtures/index.ts"),
      "@agora/contracts": r("./packages/contracts/src"),
      "@agora/domain": r("./packages/domain/src"),
    },
  },
});
