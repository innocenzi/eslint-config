module.exports = {
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
		extraFileExtensions: ['.vue'],
	},
	extends: ['./typescript', 'plugin:vue/vue3-recommended'],
	rules: {
		'vue/html-indent': ['error', 'tab'],
	},
}
