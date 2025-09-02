import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
	globalIgnores(["dist", "node_modules", "*.md"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			"for-direction": "error",
			"no-unassigned-vars": "error",
			"no-unreachable": "warn",
			"no-unused-vars": "warn",
			camelcase: [
				"error",
				{
					properties: "always",
				},
			],
			"capitalized-comments": [
				"error",
				"always",
				{
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true,
				},
			],
			curly: "error",
			"no-console": "error",
			"no-var": "error",
		},
	},
]);
