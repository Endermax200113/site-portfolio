import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'react': eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			'react-refresh': eslintPluginReactRefresh,
			'prettier': eslintPluginPrettier
		}
	},
	{
		ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.mjs', ]
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2022
			},
			parserOptions: {
				project: ['./tsconfig.json', './tsconfig.node.json']
			}
		}
	},
	{
		files: ['**/*.{ts,tsx}'],
		rules: {
			...eslintPluginPrettier.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prefer-const': 'warn',
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
			'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
			'react/self-closing-comp': ['error', { component: true, html: true }],
			'max-lines': ['warn', { max: 124 }],
			'max-params': ['error', 3],
			'prettier/prettier': ['error', { endOfLine: 'auto' }],
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-empty-object-type': 'off',
			'react/jsx-key': 'warn'
		}
	}
)

// export default tseslint.config([
// 	{
// 		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
// 		plugins: { 
// 			js
// 		}, 
// 		extends: ["js/recommended"] 
// 	},
// 	{ 
// 		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
// 		languageOptions: { 
// 			globals: globals.browser 
// 		} 
// 	},
// 	tseslint.configs.recommended,
// 	pluginReact.configs.flat.recommended,
// ]);