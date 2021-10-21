import { Preset } from 'apply'

Preset.setName('eslint-config')
Preset.extract()
Preset.editNodePackages()
	.addDev('eslint', '^7.32.0')
	.addDev('@innocenzi/eslint-config', 'latest')
