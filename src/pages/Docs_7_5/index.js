import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("Docs_7_5");

  const LinkHrefDocs_7_5 = t('Banner_Docs_7_5_Link');

  return (
    <div className="docs_7_5_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_7_5} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_7_5_TextDesktop">
              <b>ONLYOFFICE Docs 7.5 released:</b> PDF Editor, automatic hyphenation, Page Breaks and tracer arrows in sheets, Screen Readers, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_7_5} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="Banner_Docs_7_5_TextMob">
                <b>ONLYOFFICE Docs 7.5 released</b>
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
