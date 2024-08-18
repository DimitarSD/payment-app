import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "dist/",
      "build/",
      "out/",
      "node_modules/",
      ".env",
      "package-lock.json",
      "yarn.lock",
      "*.log",
      "coverage/",
      ".vscode/",
      ".idea/",
      "*.tmp",
      "*.swp",
    ],
  },
];
