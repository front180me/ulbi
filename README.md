# Study project

## Overview

This is a learning project based on Webpack, React.JS and Typescript

As there is a typescript in the project (`'ts-loader'`), no need to use Babel for `jsx` files.

## Folder Structure

- **`build`**: Bundled output
- **`config`**: Configuration folder
  - **`build`**: Webpack config helpers
- **`node_modules`**: Node.js modules and dependencies
- **`public`**: public assets
- **`src`**: Source code files.

## 'src' folder structure
The project structure is made according feature sliced design methodology.

## Other files

- `.gitignore`: git settings
- `package.json`: Node.js package file
- `README.md`: Project documentation
- `tsconfig.json`: Typescript config file
- `webpack.config.ts`: Webpack configuration file

## Scripts

To build a project in development mode:

```npm run build:dev```

To build a project in production mode:

```npm run build:prod```

To start development server locally:

```npm start```

## Artefacts

Built app is located in **`build`** folder

## React components in the project

- no need in `React` import for `jsx` files

## Dev vs Prod mode

| Property     | Dev mode       | Prod mode                   |
|--------------|----------------|-----------------------------|
| CSS          | 'style-loader' | MiniCssExtractPlugin loader |
| Source map   | +              | -                           |
| Webpack mode | 'development'  | 'production'                |


