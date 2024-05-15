import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("DocSpace_UT");

  const LinkHrefDocSpace_UT = t('DocSpace_UT_Link');

  return (
    <div className="docspace_user_testing">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_UT} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="DocSpace_UT_TextDesktop">
              Take part in usability testing of <b>ONLYOFFICE DocSpace 2.5</b> and get a free one-year Business subscription. More
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_UT} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="DocSpace_UT_TextMob">
              Take part in usability testing of <span>ONLYOFFICE DocSpace 2.5</span>
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
