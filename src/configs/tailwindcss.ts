import { ensurePackages, interopDefault } from '../utils'
import type { OptionsTailwindCSS, TypedFlatConfigItem } from '../types'

export async function tailwindcss(options: OptionsTailwindCSS = {}): Promise<TypedFlatConfigItem[]> {
	await ensurePackages([
		'tailwindcss',
	])

	const [
		pluginTailwindCSS,
	] = await Promise.all([
		// @ts-expect-error This plugin does not have TS types
		interopDefault(import('eslint-plugin-tailwindcss')),
	] as const)

	return [
		{
			name: 'innocenzi/tailwindcss',
			plugins: {
				tailwindcss: pluginTailwindCSS,
			},
			rules: {
				...pluginTailwindCSS.configs.recommended.rules as any,
				'tailwindcss/no-custom-classname': 'off',
				...options.overrides ?? {},
			},
		},
	]
}
