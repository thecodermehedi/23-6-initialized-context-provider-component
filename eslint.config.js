import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
 { ignores: ['dist', 'build', 'coverage', 'node_modules'] },
 {
  extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
   ecmaVersion: 2020,
   globals: {
    ...globals.browser,
    ...globals.node,
   },
   parserOptions: {
    project: ['./tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: import.meta.dirname,
   },
  },
  settings: { react: { version: 'detect' } },
  plugins: {
   react,
   '@typescript-eslint': tseslint.plugin,
   'react-hooks': reactHooks,
   'react-refresh': reactRefresh,
  },
  rules: {
   ...reactHooks.configs.recommended.rules,
   ...react.configs['jsx-runtime'].rules,
   'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
   ],
  },
 },
)
