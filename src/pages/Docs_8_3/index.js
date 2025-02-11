import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_8_3");

  const LinkHrefDocs_8_3 = t("Banner_Docs_8_3_Link");

  return (
    <div className="docs_8_3_released">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_8_3}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_8_3_TextDesktop">
                <strong>ONLYOFFICE Docs 8.3 released:</strong> PDF stamps, support for Pages, Keynote, Numbers, VSDX and HWP formats, Merge Shapes, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocs_8_3}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_Docs_8_3_TextMob">
              ONLYOFFICE Docs 8.3 released
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
