const languages = require("./languages.json");

const availableLanguages = languages.map((el) => el.shortKey);

const { defaultLanguage } = require("./config.json");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: availableLanguages,
        defaultLanguage,
        redirect: true,
        generateDefaultLanguagePage: `/en`,

        i18nextOptions: {
          fallbackLng: "en",
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/preview",
            languages: availableLanguages,
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Open Sans:400,600,700"],
      },
    },
  ],
};
