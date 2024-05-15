import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("DocSpace");

  const LinkHrefDocSpace = t("Banner_DocSpace_Link");

  return (
    <div className="docspace-released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_TextDesktop">
                <b>ONLYOFFICE DocSpace released:</b> improve document
                collaboration with offices, customers, and partners.{" "}
                <b>Use it for free!</b>
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className="advent-announce advent-desktop-hide">
        <a target="_blank" href={LinkHrefDocSpace} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_DocSpace_TextMob">
              <b>ONLYOFFICE DocSpace</b> released
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
