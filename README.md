# check-preview

## Logic Flow

- By default page load, Preview shows with sample image.
- Grid containing list of items/rows.
- Click on Grid row triggers Preview to render data from that row.
- Any other rows clicks re-renders Preview and shows latest data.
- Preview has a Check image and hyperlink-buttons: "Adjust", "Print"
- "Adjust" triggers popoup/Modal (or append small UI beneath sample Preview)
- "Print" triggers priting request, and PDF View popup.

## Tech Stack
- ReactJS 
- Webpack
- https://react.semantic-ui.com/usage
- [Semantic UI React](https://github.com/Semantic-Org/Semantic-UI-React)