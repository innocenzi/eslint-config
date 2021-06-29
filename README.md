<h2 align="center">ESLint</h2>

<p align="center">
  <a href="https://www.npmjs.com/package/@innocenzi/eslint-config">
    <img alt="npm" src="https://img.shields.io/npm/v/@innocenzi/eslint-config">
  </a>
  <br />
  <br />
  <p align="center">
    Personal ESLint configuration for my projects.
  </p>
  <pre><div align="center">npx apply innocenzi/eslint-config</div></pre>
</p>

&nbsp;

## Usage

There are three configurations:

- `@innocenzi/eslint-config/typescript` - This is the default, for TypeScript projects.
- `@innocenzi/eslint-config/vue` - It extends the TypeScript one, for Vue projects.
- `@innocenzi/eslint-config/basic` - If I ever do something without TypeScript.

&nbsp;

## Example

```json
// eslintrc
{
	"extends": "@innocenzi/eslint-config"
}
```

&nbsp;

## Credits

Most of the configuration comes from [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). I've been using this for a while with a superset of my own rules, so I've decided to make my own reusable configuration.
