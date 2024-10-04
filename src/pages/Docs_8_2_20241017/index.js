import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_8_2_20241017");

  const LinkHrefDocs_8_2_20241017 = t("Banner_Docs_8_2_20241017_Link");
  const RegLinkHrefDocs_8_2_20241017 = t("Banner_Docs_8_2_20241017_RegLink");

  return (
    <div className="docs_8_2_20241017">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <div className="advent-announce-text">
          <div className="aat_text">
            <p>
              <Trans i18nKey="Banner_Docs_8_2_20241017_TextDesktop">
                <strong>ONLYOFFICE DOCS 8.2</strong> release on October 17th: Join our free webinar and win cool prizes
              </Trans>
            </p>
          </div>
          <div class="buttons_wrapper">
            <a
              className="button transparent"
              target="_blank"
              href={LinkHrefDocs_8_2_20241017}
              rel="noreferrer noopener"
            >
              <Trans i18nKey="LearnMore"></Trans>
            </a>
            <a
              className="button white_opacity"
              target="_blank"
              href={RegLinkHrefDocs_8_2_20241017}
              rel="noreferrer noopener"
            >
              <Trans i18nKey="Register"></Trans>
            </a>
          </div>
        </div>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_8_2_20241017}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <p>
              <Trans i18nKey="Banner_Docs_8_2_20241017_TextMob">
              Join the free webinar on ONLYOFFICE Docs 8.2
              </Trans>
            </p>
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
