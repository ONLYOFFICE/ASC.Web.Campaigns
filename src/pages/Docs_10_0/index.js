import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_10_0");

  // Dark is the default; ?theme=light switches to the light variant
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("theme") === "light") setTheme("light");
  }, []);

  const LinkHrefDocs_10_0 = t("Banner_Docs_10_0_Link");

  return (
    <div className={"docs_10_0_released" + (theme === "light" ? " theme-light" : "")}>
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_10_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_10_0_TextDesktop">
                <span>Meet ONLYOFFICE Docs 10.0</span> modular apps and AI tools, 50+ new features, 1,000 bug fixes, 35 fixed vulnerabilities, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_10_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <span><Trans i18nKey="Banner_Docs_10_0_TextMob">
              Meet ONLYOFFICE Docs 10.0
            </Trans></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
