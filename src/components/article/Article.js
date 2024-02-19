import React, { useEffect } from "react";
import Banner from "../banner";
import {
  StyledArticle,
  ArticleHeader,
  Header,
  StyledButtonWrapper,
  Button,
  Block,
  ArticleWrapper,
} from "./styled-article";
import logo from "./lightsmall.svg";
import { useBannerStore } from "../../store/bannerStore";

export const Article = ({ campaignName, language }) => {
  const fetchCampaign = useBannerStore((state) => state.fetch);
  const campaignImage = useBannerStore((state) => state.campaignImage);
  const campaignTranslate = useBannerStore((state) => state.campaignTranslate);
  const campaignConfig = useBannerStore((state) => state.campaignConfig);

  useEffect(() => {
    fetchCampaign(campaignName, language);
  }, []);

  useEffect(() => {
    fetchCampaign(campaignName, language);
  }, [campaignName, language]);

  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(<Block key={i} />);
  }

  return (
    <StyledArticle>
      <ArticleHeader>
        <Header>
          <img src={logo} />
        </Header>
      </ArticleHeader>
      <StyledButtonWrapper>
        <Button>Actions</Button>
      </StyledButtonWrapper>
      <ArticleWrapper>
        {elements}
        {campaignName && (
          <Banner
            campaignImage={campaignImage}
            campaignTranslate={campaignTranslate}
            campaignConfig={campaignConfig}
          />
        )}
      </ArticleWrapper>
    </StyledArticle>
  );
};
