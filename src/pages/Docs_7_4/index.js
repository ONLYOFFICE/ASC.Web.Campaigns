import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("Docs_7_4");

  const LinkHrefDocs_7_4 = t('Banner_Docs_7_4_Link');

  return (
    <div className="docs_7_4_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_7_4} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_7_4_TextDesktop">
              <b>ONLYOFFICE <span>Docs 7.4 released:</span></b> AI helper, drawing, radar charts, combining documents, saving objects as pictures, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className="advent-announce advent-desktop-hide">
        <a target="_blank" href={LinkHrefDocs_7_4} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="Banner_Docs_7_4_TextMob">
                <b>ONLYOFFICE <span>Docs 7.4</span></b><br/> released
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
