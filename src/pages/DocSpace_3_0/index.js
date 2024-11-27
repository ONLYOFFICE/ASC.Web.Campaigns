import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("DocSpace_3_0");

  const LinkHrefDocSpace_3_0 = t("Banner_DocSpace_3_0_Link");

  return (
    <div className="docSpace_3_0_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_DocSpace_3_0_TextDesktop">
                <strong>ONLYOFFICE DocSpace 3.0 released</strong><span className="bannerlightblue">:</span> Updated user types<span className="bullet">•</span>Virtual Data rooms<span className="bullet">•</span>OAuth2.0<span className="bullet">•</span>Improved room & File management<span className="bullet">•</span>and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_3_0}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_DocSpace_3_0_TextMob">
              <strong>ONLYOFFICE DocSpace 3.0</strong> released
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
