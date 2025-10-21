import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("DocSpace_3_5");

  const LinkHrefDocSpace_3_5 = t("Banner_DocSpace_3_5_Link");

  return (
    <div className="docSpace_3_5_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_5}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_3_5_TextDesktop">
                <strong>Meet ONLYOFFICE DocSpace 3.5</strong> with the upgraded editors! A more powerful PDF Editor with Redact and new annotation tools, streamlined sharing, improved file and room management, and more.
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_5}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_DocSpace_3_5_TextMob">
              <strong>Meet ONLYOFFICE DocSpace 3.5</strong>
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
