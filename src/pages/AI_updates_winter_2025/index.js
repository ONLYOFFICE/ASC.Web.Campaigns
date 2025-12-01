import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("AI_updates_winter_2025");

  const LinkHrefAI_updates_winter_2025 = t("Banner_AI_updates_winter_2025_Link");

  return (
    <div className="ai_updates_winter_2025_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefAI_updates_winter_2025}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_AI_updates_winter_2025_TextDesktop">
                <strong>Explore the latest AI updates in ONLYOFFICE:</strong> AI agents for smarter workflows in DocSpace and the desktop app, AI-powered spelling and grammar checks in Docs
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefAI_updates_winter_2025}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_AI_updates_winter_2025_TextMob">
              <strong>Meet ONLYOFFICE DocSpace 3.5</strong>
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
