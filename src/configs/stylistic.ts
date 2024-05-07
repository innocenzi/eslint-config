import { interopDefault } from '../utils'
import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types'
import { pluginAntfu } from '../plugins'

export const StylisticConfigDefaults: StylisticConfig = {
	indent: 'tab',
	jsx: true,
	quotes: 'single',
	semi: false,
}

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {}

export async function stylistic(
	options: StylisticOptions = {},
): Promise<TypedFlatConfigItem[]> {
	const {
		indent,
		jsx,
		overrides = {},
		quotes,
		semi,
	} = {
		...StylisticConfigDefaults,
		...options,
	}

	const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'))

	const config = pluginStylistic.configs.customize({
		flat: true,
		indent,
		jsx,
		pluginName: 'style',
		quotes,
		semi,
	})

	return [
		{
			name: 'innocenzi/stylistic/rules',
			plugins: {
				antfu: pluginAntfu,
				style: pluginStylistic,
			},
			rules: {
				...config.rules,

				'antfu/consistent-list-newline': 'error',
				'antfu/top-level-function': 'error',
				'curly': ['error', 'all'],
				'style/arrow-parens': ['error', 'always'],
				'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
				'style/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
				'style/padding-line-between-statements': [
					'error',
					{ blankLine: 'always', next: 'return', prev: ['block', 'block-like', 'class'] },
					{ blankLine: 'never', next: 'block', prev: 'block' },
				],
				'style/quotes': ['error', 'single', { avoidEscape: true }],

				...overrides,
			},
		},
	]
}
