import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Christmas_2022");

  const LinkHrefChristmas2022 = t("Banner_Xmas_2022_Link");

  return (
    <div className="xmas-2022">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHrefChristmas2022}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Xmas_2022_TextDesktop">
                <b>ONLYOFFICE Christmas Gift Hunt:</b> discounts and prizes all
                the way [win Murena One, Mini PC, merch]
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className="advent-announce advent-desktop-hide">
        <a
          target="_blank"
          href={LinkHrefChristmas2022}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <b>
              <Trans i18nKey="Banner_Xmas_2022_TextMob">
                ONLYOFFICE Christmas Gift Hunt
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
