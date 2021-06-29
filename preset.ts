import { Preset } from 'apply'

Preset.setName('eslint-config')
Preset.extract()
Preset.editNodePackages()
	.addDev('eslint', '^7.29.0')
	.addDev('@innocenzi/eslint-config', '^0.1.8')
