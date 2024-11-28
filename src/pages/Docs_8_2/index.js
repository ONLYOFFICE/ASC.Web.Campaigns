import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_8_2");

  const LinkHrefDocSpace_2_6 = t("Banner_Docs_8_2_Link");

  return (
    <div className="docs_8_2">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefDocSpace_2_6}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Docs_8_2_TextDesktop">
                <strong>ONLYOFFICE Docs 8.2 released:</strong> PDF collaborative editing, revamped interface, optimized performance, and more
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
            <strong>
              <Trans i18nKey="Banner_Docs_8_2_TextMob">
                Meet ONLYOFFICE Docs 8.2
              </Trans>
            </strong>
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
