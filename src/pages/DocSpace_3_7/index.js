import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("DocSpace_3_7");

  const LinkHrefDocSpace_3_7 = t("Banner_DocSpace_3_7_Link");

  return (
    <div className="docspace_3_7_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_7}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_3_7_TextDesktop">
                <strong>ONLYOFFICE DocSpace 3.7 released:</strong> File generation & new providers in AI agents, smarter forms, room grouping, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_7}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <strong><Trans i18nKey="Banner_DocSpace_3_7_TextMob">
              ONLYOFFICE DocSpace 3.7 released
            </Trans></strong>
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
