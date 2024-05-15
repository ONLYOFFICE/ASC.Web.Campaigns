import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Docs_7_2");

  const LinkHrefDocs72 = t("Banner_7_2_Link");

  return (
    <div className="docs-7-2">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a target="_blank" href={LinkHrefDocs72} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_7_2_TextDesktop">
                Discover <b>ONLYOFFICE Docs v7.2</b> with plugin marketplace,
                new form fields, live viewer, ligatures, updated UI, and more
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className="advent-announce advent-desktop-hide">
        <a target="_blank" href={LinkHrefDocs72} rel="noreferrer noopener">
          <div className="advent-announce-text">
            <b>
              <Trans i18nKey="Banner_7_2_TextMob">
                Discover ONLYOFFICE Docs v7.2
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
