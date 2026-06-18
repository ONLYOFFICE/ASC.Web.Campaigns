import * as React from "react";
import { graphql } from "gatsby";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import "../../styles/base.css";
import "./index.css";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation("Vote_Numeriques_2026");

  const LinkHref_Vote_Numeriques_2026 = t("Banner_Vote_Numeriques_2026_Link");

  return (
    <div className="vote_numeriques_2026">
      <div className={"advent-announce advent-mobile-hide " + language}>
        <a
          target="_blank"
          href={LinkHref_Vote_Numeriques_2026}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <div>
              <Trans i18nKey="Banner_Vote_Numeriques_2026_TextDesktop">
                <strong>Vote for ONLYOFFICE</strong> in the Les Numériques Readers' Choice Awards and help us win!
              </Trans>
            </div>
          </div>
        </a>
      </div>
      <div className={"advent-announce advent-desktop-hide " + language}>
        <a
          target="_blank"
          href={LinkHref_Vote_Numeriques_2026}
          rel="noreferrer noopener"
        >
          <div className="advent-announce-text">
            <strong><Trans i18nKey="Banner_Vote_Numeriques_2026_TextMob">
              Vote for ONLYOFFICE
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
