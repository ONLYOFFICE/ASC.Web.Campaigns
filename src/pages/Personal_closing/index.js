import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const { t, i18n: { language } } = useTranslation("Personal_closing");

  const LinkHrefPersonal_closing = t('Personal_closing_Link');

  return (
    <div className="personal_closing">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefPersonal_closing} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Personal_closing_TextDesktop">
              <strong>We are wrapping up <b>ONLYOFFICE Personal</b> on September 1st: move to DocSpace.</strong> Learn more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefPersonal_closing} rel="noreferrer noopener">
          <div className="advent-announce-text">
              <Trans i18nKey="Personal_closing_TextMob">
              We are wrapping up <b>ONLYOFFICE Personal</b>
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
