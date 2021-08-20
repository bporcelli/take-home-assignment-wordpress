# Getting Started

- Please read the INSTRUCTIONS.md first

# Code and Design Decisions

- This seems like a chunk of functionality that can be reused in themes other than the side child theme, so I chose to implement it as a "Property List" block in the Side plugin.
    - I chose a Gutenberg block over other alternatives like a custom page template or shortcode because a block provides maximal flexibility in terms of where the property list is placed and also provides a natural path forward should we want to embed lists of properties matching specific search criteria on different pages  (block controls can be added).
- I used the theme strictly to implement the sticky header and for fine tuning the styles to match the mockup. I wound up hiding the admin bar with the `_show_admin_bar` filter since it was getting in the way of the sticky header.
- I had originally planned to add unit/snapshot tests for all of the React components that comprise the Property List block, but I ran out of time, so I only added unit tests for the critical functions in the "util" module that handle state management.
- I added one simple integration test to make sure the Property List block renders correctly, but ran out of time before I could add more comprehensive tests.
    - I used [WP Cypress](https://github.com/bigbite/wp-cypress) to make this a bit faster. **You will need to run `yarn wp-cypress start` before running `yarn test` in the project root or the tests won't pass**
- Other things omitted for want of time:
    - CSS fallback for browsers that don't support CSS grid.
    - More secure way to pass simplyrets API credentials to avoid public exposure in JS source and potential abuse.
    - Some inline docs for methods that should have an obvious purpose to developers familiar with React.
    - There are some warnings in the plugin build that I didn't have time to debug and resolve. The build still succeeds.
