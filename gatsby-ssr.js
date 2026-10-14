const React = require("react");

// Runs before the first paint, so a page opened with ?theme=light never flashes
// its dark default while React is still loading. Pages style the light variant
// through the html.theme-light class.
const themeScript = `
  if (/[?&]theme=light(&|$)/.test(window.location.search)) {
    document.documentElement.classList.add("theme-light");
  }
`;

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script key="theme" dangerouslySetInnerHTML={{ __html: themeScript }} />,
  ]);
};
