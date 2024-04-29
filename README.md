<h2 align="center">ESLint</h2>

<p align="center">
  <a href="https://www.npmjs.com/package/@innocenzi/eslint-config">
    <img alt="npm" src="https://img.shields.io/npm/v/@innocenzi/eslint-config">
  </a>
  <br />
  <br />
  <p align="center">
    Personal eslint configuration for my projects.
  </p>
  <pre><div align="center">npx @preset/cli innocenzi/config --eslint</div></pre>
</p>

&nbsp;

## Usage

```ts
// eslint.config.mjs
import defineEslintConfig from '@antfu/eslint-config'

export default defineEslintConfig()
```

&nbsp;

## Credits

This configuration is a fork of Anthony's Fu [`eslint-config`](https://github.com/antfu/eslint-config), with my own rules in it. I've been using it for a while with a superset of my own rules, so I've decided to make my own reusable configuration.
