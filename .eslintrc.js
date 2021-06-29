module.exports = {
	extends: ['./index.js'],
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			env: {
				node: true,
			},
		},
	],
}
