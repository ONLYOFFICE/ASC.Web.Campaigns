import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_9_0");

  const LinkHrefDocs_9_0 = t("Banner_Docs_9_0_Link");

  return (
    <div className="docs_9_0">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_9_0_TextDesktop">
                <strong>Meet ONLYOFFICE Docs 9.0:</strong> new interface, Diagram Viewer, .md support, AI-powered sheets — register for the webinar on June 18, 2PM CEST
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_Docs_9_0_TextMob">
              Meet ONLYOFFICE Docs 9.0
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
