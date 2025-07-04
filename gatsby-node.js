exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  createRedirect({
    fromPath: `/`,
    toPath: `/en/Docs_9_0_released`,
    exactPath: true,
    isPermanent: true,
    redirectInBrowser: true,
  });
};
