import { Preset } from 'apply'

Preset.setName('eslint-config')
Preset.extract()
Preset.editNodePackages()
	.add('eslint', '^7.29.0')
	.add('@innocenzi/eslint-config', '^0.1.8')
