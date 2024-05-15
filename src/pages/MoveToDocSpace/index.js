import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("MoveToDocSpace");

  const LinkHrefDocSpace = t("Banner_MoveToDocSpace_Link");

  return (
    <div className="move-to-docspace">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_MoveToDocSpace_TextDesktop">
                <b>Move to ONLYOFFICE DocSpace:</b> create a <i>free</i> account
                or benefit from the <i>free</i> 3-month Business subscription.{" "}
                <b>Get started</b>
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a target="_blank" href={LinkHrefDocSpace} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_MoveToDocSpace_TextMob">
              <b>Move to ONLYOFFICE DocSpace</b>
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
