import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("DocSpace_UT_3_0");

  const LinkHrefDocSpace_UT_3_0 = t('DocSpace_UT_3_0_Link');

  return (
    <div className="docSpace_UT_3_0">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_UT_3_0} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="DocSpace_UT_3_0_TextDesktop">
              Call for usability testing: ONLYOFFICE DocSpace v3.0
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_UT_3_0} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="DocSpace_UT_3_0_TextDesktop">
              Call for usability testing: ONLYOFFICE DocSpace v3.0
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
