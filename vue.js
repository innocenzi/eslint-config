module.exports = {
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
		extraFileExtensions: ['.vue'],
	},
	extends: [
		'@innocenzi/eslint-config/typescript',
		'plugin:vue/vue3-recommended',
	],
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'no-unused-imports': 'off',
				'no-unused-vars': 'off',
				'unused-imports/no-unused-imports': 'off',
				'unused-imports/no-unused-vars': 'off',
				'@typescript-eslint/no-unused-imports': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
			},
		},
	],
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': ['error', {
			html: {
				void: 'always',
				normal: 'always',
				component: 'always',
			},
			svg: 'always',
			math: 'always',
		}],
		'vue/max-attributes-per-line': ['warn', { singleline: 5 }],
	},
}
