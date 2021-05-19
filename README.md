# check-preview

POC-like project - Interactive Check Page Skeleton - Grid, Items, Preview.

## Logic Flow

- By default page load, Preview shows with sample image.
- Grid containing list of items/rows.
- Click on Grid row triggers Preview to render data from that row.
- Any other rows clicks re-renders Preview and shows latest data.
- Preview has a Check image and hyperlink-buttons: "Adjust", "Print"
- "Adjust" triggers popup/Modal (or append small UI beneath sample Preview)
- "Print" triggers printing request, and PDF View popup.

## Tech Stack
- ReactJS
- Webpack
- https://react.semantic-ui.com/usage
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React)

## Lessons Learned

- SemanticUI React components like `Input`, `Dropdown`, `Checkbox` have to have properties `name` (to use in `setState()`), `value` with bound value from component state, and `onChange` handler. Otherwise components will not work. Tested with Input type="number", which didn't do increase/decrease until I fix code. [Details](https://github.com/Semantic-Org/Semantic-UI-React/issues/638).
- Semantic UI `Input` vs. `Form.Input` ?
- Use Semantic UI via file in CSS (`semantic-ui-less`) requires `css-loader`.
- Use Semantic UI via LESS (`semantic-ui-less`) requires `theme.config`. [Details (example with Webpack 2)](https://medium.com/webmonkeys/webpack-2-semantic-ui-theming-a216ddf60daf)
- Embed PDF in HTML, with disabling PDF viewer look.
    - [Details 1](https://www.codexworld.com/embed-pdf-document-file-in-html-web-page/)
    - [Details 2](https://stackoverflow.com/questions/291813/recommended-way-to-embed-pdf-in-html)
    - PDF can be fetched via Axios as Binary, and embeded as blob later in JS/HTML. But it will require iframe.
- To run in GitHub Pages mode, need to have proper static code from main `index.html` pointing to dist. So far failed.
- To run on Heroku, need to have `webpack` and `webpack-dev-server` installed as main dependency. Changed `env` from production to development didn't help. So far failed.

## Lessons Learned 2021
- Initial bootstrap of project was based on many devDependencies. I then created CRA from the scratch relying on `react-scripts`.
- As result, `LESS` support becomes more complicated. Details here:
    - https://jasonwatmore.com/post/2020/02/10/react-how-to-add-global-css-less-styles-to-react-with-webpack
    - https://blog.bitsrc.io/using-less-with-create-react-app-without-ejecting-510a3344ef5d
    - https://stackoverflow.com/questions/57749719/using-less-files-with-react
- So I decided to use [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) within CRA. But it complicates when I have already nested CSS selectors. + https://glenmaddern.com/articles/css-modules
- CRA/`react-scripts` already depends on [`sass-loader`](https://github.com/webpack-contrib/sass-loader) - a webpack contrib plugin. So I decided to migrate to SASS in particular relying on [Dart Sass](https://sass-lang.com/dart-sass). So I `yarn add sass`. It also helps to avoid dependencies of `node-sass` now. + https://github.com/facebook/create-react-app/issues/5282