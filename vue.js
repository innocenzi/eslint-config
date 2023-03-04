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
			globals: {
				defineProps: 'readonly',
				defineEmits: 'readonly',
				defineExpose: 'readonly',
				withDefaults: 'readonly',
			}
		},
	],
	rules: {
		'vue/no-v-text-v-html-on-component': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/html-self-closing': ['error', {
			html: {
				void: 'always',
				normal: 'always',
				component: 'always',
			},
			svg: 'always',
			math: 'always'
		}],
		'vue/max-attributes-per-line': ['warn', { 
			singleline: 5
		}],
		'vue/component-name-in-template-casing': ['error', 'kebab-case', {
			registeredComponentsOnly: true,
			ignores: []
  		}],
		'vue/component-tags-order': ['error', {
			'order': [ 'script', 'template', 'style' ]
		}],
		'vue/multi-word-component-names': 'off',
		'vue/array-bracket-spacing': ['error', 'never'],
		'vue/array-bracket-newline': ['error', {
			multiline: true,
			minItems: 3
		}],
		'vue/object-curly-spacing': ['error', 'always'],
		'vue/object-shorthand': ['error', 'always'],
		'vue/object-curly-newline': [
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
		]
	},
}
