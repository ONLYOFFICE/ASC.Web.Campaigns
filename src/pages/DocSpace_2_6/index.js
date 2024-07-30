import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("DocSpace_2_6");

  const LinkHrefDocSpace_2_6 = t("Banner_DocSpace_2_6_Link");

  return (
    <div className="docspace_2_6_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_2_6}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_2_6_TextDesktop">
                <strong>ONLYOFFICE DocSpace 2.6</strong> <b>released</b>: Form Filling Rooms, LDAP, polished room and file management, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_2_6}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <b>
              <Trans i18nKey="Banner_DocSpace_2_6_TextMob">
                <strong>ONLYOFFICE DocSpace 2.6</strong> released
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
