# check-preview

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