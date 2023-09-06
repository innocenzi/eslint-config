module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'standard',
		'plugin:import/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:jsonc/recommended-with-jsonc',
		'plugin:yml/standard',
	],
	ignorePatterns: ['.hybridly/*.d.ts'],
	plugins: ['html', 'unicorn'],
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
		},
	},
	overrides: [
		{
			files: ['*.json', '*.json5'],
			parser: 'jsonc-eslint-parser',
			rules: {
				quotes: ['error', 'double'],
				'quote-props': ['error', 'always'],
				'comma-dangle': ['error', 'never'],
				'jsonc/array-bracket-spacing': ['error'],
				'jsonc/indent': ['error', 4],
				'jsonc/comma-dangle': ['error', 'never'],
				'jsonc/comma-style': ['error', 'last'],
			},
		},
		{
			files: ['package.json'],
			parser: 'jsonc-eslint-parser',
			rules: {
				'jsonc/sort-keys': [
					'error',
					{
						pathPattern: '^$',
						order: [
							'name',
							'version',
							'description',
							'keywords',
							'license',
							'repository',
							'funding',
							'author',
							'type',
							'files',
							'exports',
							'main',
							'module',
							'unpkg',
							'bin',
							'scripts',
							'husky',
							'lint-staged',
							'peerDependencies',
							'peerDependenciesMeta',
							'dependencies',
							'devDependencies',
							'eslintConfig',
						],
					},
					{
						pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
						order: { type: 'asc' },
					},
				],
			},
		},
	],
	rules: {
		// import
		'import/named': 'off', // bugged
		'import/order': 'error',
		'import/first': 'error',
		'import/no-mutable-exports': 'error',
		'import/no-unresolved': 'off',
		'import/no-absolute-path': 'off',

		// Common
		semi: ['error', 'never'],
		curly: ['error', 'multi-or-nest', 'consistent'],
		quotes: ['error', 'single', { avoidEscape: true }],
		'quote-props': ['error', 'consistent-as-needed'],
		'no-unused-vars': ['warn', {
			vars: 'all',
			varsIgnorePattern: '^_',
			args: 'after-used',
			argsIgnorePattern: '^_',
		}],
		'no-param-reassign': 'off',
		'no-undef': 'off', // too many false positivies
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'block-spacing': ['error', 'always'],
		camelcase: 'off',
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'always-multiline'],
		'no-constant-condition': 'warn',
		'no-debugger': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-cond-assign': ['error', 'always'],
		'func-call-spacing': ['off', 'never'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		indent: [
			'error',
			2,
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
			},
		],
		'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
		'object-curly-spacing': ['error', 'always'],
		'no-return-await': 'off',
		'space-before-function-paren': ['error', 'never'],
		'multiline-ternary': 'off',

		// es6
		'no-var': 'error',
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		],
		'prefer-arrow-callback': [
			'error',
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		'object-shorthand': [
			'error',
			'always',
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'generator-star-spacing': 'off',

		// best-practice
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'consistent-return': 'off',
		complexity: ['off', 11],
		eqeqeq: ['error', 'allow-null'],
		'no-alert': 'warn',
		'no-case-declarations': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-with': 'error',
		'no-void': 'error',
		'no-useless-escape': 'off',
		'vars-on-top': 'error',
		'require-await': 'off',
		'no-return-assign': 'off',
		'operator-linebreak': ['error', 'before'],

		// unicorns
		'unicorn/switch-case-braces': 'error',
		'unicorn/no-unnecessary-await': 'error',
		'unicorn/prefer-logical-operator-over-ternary': 'error',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/no-array-instanceof': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/no-unsafe-regex': 'off',
		'unicorn/number-literal-case': 'error',
		'unicorn/prefer-exponentiation-operator': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-starts-ends-with': 'error',
		'unicorn/prefer-text-content': 'error',
		'unicorn/prefer-type-error': 'error',
		'unicorn/throw-new-error': 'error',
		'unicorn/prefer-node-protocol': 'error',

		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: false,
				variables: true,
			},
		],
		'eslint-comments/disable-enable-pair': 'off',
		'promise/param-names': 'off',
	},
}
