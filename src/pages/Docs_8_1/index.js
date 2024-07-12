import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("Docs_8_1");

  const LinkHrefDocs_8_1 = t('Docs_8_1_Link');

  return (
    <div className="docs_8_1">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_8_1} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Docs_8_1_TextDesktop">
              <span>ONLYOFFICE Docs 8.1 released:</span> full-featured PDF Editor, Slide Master, improved RTL, enhanced collaboration in sheets, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_8_1} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="Docs_8_1_TextMob">
              <span>ONLYOFFICE Docs 8.1</span> released
              </Trans>
          </div>
        </a>
      </div>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
