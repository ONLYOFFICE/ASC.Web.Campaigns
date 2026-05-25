import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_9_4");

  const LinkHrefDocs_9_4 = t("Banner_Docs_9_4_Link");

  return (
    <div className="docs_9_4_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_4}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_9_4_TextDesktop">
                <strong>ONLYOFFICE Docs 9.4 released:</strong> license update, Dark Document for sheets, horizontal lines, new slide themes & transitions, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_4}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <strong><Trans i18nKey="Banner_Docs_9_4_TextMob">
              ONLYOFFICE Docs 9.4 released
            </Trans></strong>
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
