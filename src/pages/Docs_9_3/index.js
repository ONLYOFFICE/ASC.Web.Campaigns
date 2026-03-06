import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_9_3");

  const LinkHrefDocs_9_3 = t("Banner_Docs_9_3_Link");

  return (
    <div className="docs_9_3_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_3}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_9_3_TextDesktop">
                <strong>ONLYOFFICE Docs 9.3 released</strong>: enhanced PDF Editor and more signature options, multipage view for documents, Solver in sheets, GIF playback in presentation slideshow mode, AI-powered updates, and more.
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_9_3}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_Docs_9_3_TextMob">
              <strong>ONLYOFFICE Docs 9.3 released</strong>
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
