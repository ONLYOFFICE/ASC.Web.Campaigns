import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("Docs_8_1_webinar");

  const LinkHrefDocs_8_1_webinar = t('Docs_8_1_webinar_Link');

  return (
    <div className="docs_8_1_webinar">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_8_1_webinar} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Docs_8_1_webinar_TextDesktop">
              <b>ONLYOFFICE Docs v8.1 release on June 19th:</b> save the date and join our free webinar. Learn more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocs_8_1_webinar} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <b>
                <Trans i18nKey="Docs_8_1_webinar_TextMob">
                ONLYOFFICE Docs v8.1 release on June 19th
                </Trans>
              </b>
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
