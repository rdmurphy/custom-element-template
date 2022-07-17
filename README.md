# `<custom-element>` element

An opinionated template for creating a custom element.

## Installation

You can install `<custom-element>` with npm, Yarn or pnpm.

```js
npm install custom-element-element
# or
yarn add custom-element-element
# or
pnpm install custom-element-element
```

## Usage

Import the custom element in your JavaScript bundle:

```js
import 'custom-element-element';
```

Then use the custom element in your HTML:

```html
<custom-element></custom-element>
```

## Development

This project uses [Vite](https://vitejs.dev/), a build tool that "aims to provide a faster and leaner development experience for modern web projects." The tests are ran using the [Playwright Test](https://playwright.dev/) test runner, which makes it easy to test custom elements in multiple browsers.

To set up your development environment, run the following command to install dependencies:

```sh
npm install
```

Run the following command to view your changes live in the browser:

```sh
npm start
```

When you want to run the tests, run:

```sh
npm test
```

## License

MIT