module.exports = {
	extends: [
		'plugin:vue/vue3-recommended',
		'@innocenzi/eslint-config/typescript',
	],
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'no-unused-imports': 'off',
				'unused-imports/no-unused-imports': 'off',
				'unused-imports/no-unused-vars': 'off',
				'@typescript-eslint/no-unused-imports': 'off',
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
		'vue/max-attributes-per-line': ['warn', { 
			singleline: 5
		}],
		'vue/component-tags-order': ['error', {
    			'order': [ 'script', 'template', 'style' ]
		}]
	},
}
