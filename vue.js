module.exports = {
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
		extraFileExtensions: ['.vue'],
	},
	extends: ['./typescript', 'plugin:vue/vue3-recommended'],
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
