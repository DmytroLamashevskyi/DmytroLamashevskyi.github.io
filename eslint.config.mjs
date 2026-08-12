import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      quotes: "off",
      "no-useless-escape": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".claude/**",
  ]),
]);

export default eslintConfig;
