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
    toPath: `/en/AI_06_2025`,
    exactPath: true,
    isPermanent: true,
    redirectInBrowser: true,
  });
};
