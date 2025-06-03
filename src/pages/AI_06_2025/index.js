import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("AI_06_2025");

  const LinkHrefAI_06_2025 = t("Banner_AI_06_2025_Link");

  return (
    <div className="ai_06_2025">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefAI_06_2025}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_AI_06_2025_TextDesktop">
                Discover image creation with Stability AI, Dea’s internship story, the EUNICE academic case, and the best spelling tools
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefAI_06_2025}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_AI_06_2025_TextMob">
              ONLYOFFICE Docs 8.3 released
            </Trans>
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
