import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("DocSpace_2_5");

  const LinkHrefDocSpace_2_5 = t('Banner_DocSpace_2_5_Link');

  return (
    <div className="DocSpace_2_5_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_2_5} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_2_5_TextDesktop">
              <b>ONLYOFFICE <span>DocSpace 2.5 released:</span></b> Public rooms improvements, user groups, storage management, embedding presets, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace_2_5} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <b>
                <Trans i18nKey="Banner_DocSpace_2_5_TextMob">
                ONLYOFFICE <span>DocSpace 2.5 released</span>
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
