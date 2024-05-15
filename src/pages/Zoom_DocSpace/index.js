import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Zoom_DocSpace");

  const LinkHref_Zoom_DocSpace = t("Banner_Zoom_DocSpace_Link");

  return (
    <div className="zoom_docspace">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHref_Zoom_DocSpace}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Zoom_DocSpace_TextDesktop">
                <b>Collaborate on documents within Zoom meetings:</b> ONLYOFFICE
                DocSpace app for Zoom available
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHref_Zoom_DocSpace}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <Trans i18nKey="Banner_Zoom_DocSpace_TextMob">
              <b>ONLYOFFICE Zoom integration</b>
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
