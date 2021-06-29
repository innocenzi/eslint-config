// eslint-disable-next-line @typescript-eslint/no-var-requires
const basic = require('./basic')

module.exports = {
	plugins: ['@typescript-eslint', 'unused-imports'],
	extends: [
		'@innocenzi/eslint-config/basic',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: basic.overrides,
	rules: {
		// TS
		'no-useless-constructor': 'off',
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{ multiline: { delimiter: 'none' } },
		],
		'@typescript-eslint/type-annotation-spacing': ['error', {}],

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',

		// off
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',

		// other
		'no-console': ['warn'],
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'no-tabs': 'off',
		'@typescript-eslint/no-tabs': 'off',
		'arrow-parens': ['error', 'always'],
		'indent': 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'no-multi-spaces': ['error'],
		'@typescript-eslint/no-inferrable-types': 'off',
		'curly': ['error', 'all'],
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				enums: false,
				typedefs: false,
				ignoreTypeReferences: false,
				functions: false,
			},
		],
		'standard/no-callback-literal': 'off',
		'quotes': ['error', 'single', { avoidEscape: true }],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'never',
				prev: 'block',
				next: 'block',
			},
		],
		'object-property-newline': 'error',
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					multiline: true,
					consistent: true,
				},
			},
		],
		'array-bracket-spacing': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
	},
}
