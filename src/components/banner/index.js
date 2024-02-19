import React from "react";
import {
  BannerWrapper,
  BannerContent,
  BannerButton,
  StyledText,
  StyledLink,
} from "./styled-banner";

const Banner = (props) => {
  const { campaignImage, campaignTranslate, campaignConfig } = props;
  const { Header, SubHeader, Text, ButtonLabel, Link } = campaignTranslate;
  const { borderColor, title, body, text, action } = campaignConfig;

  const hasTitle = !!Header;
  const hasBodyText = !!SubHeader;
  const hasText = !!Text;
  const isButton = action?.isButton;

  const onAction = (type, url) => {
    switch (type) {
      case "select-form":
        alert("Select form dialog open");
        break;
      case "open-url":
      default:
        window.open(url, "_blank");
        break;
    }
  };

  return (
    <BannerWrapper background={campaignImage} borderColor={borderColor}>
      <BannerContent>
        {hasTitle && (
          <StyledText
            color={title?.color}
            fontSize={title?.fontSize}
            fontWeight={title?.fontWeight}
          >
            {Header}
          </StyledText>
        )}
        {hasBodyText && (
          <StyledText
            color={body?.color}
            fontSize={body?.fontSize}
            fontWeight={body?.fontWeight}
          >
            {SubHeader}
          </StyledText>
        )}
        {hasText && (
          <StyledText
            color={text?.color}
            fontSize={text?.fontSize}
            fontWeight={text?.fontWeight}
          >
            {Text}
          </StyledText>
        )}
        {isButton ? (
          <BannerButton
            buttonTextColor={action?.color}
            buttonColor={action?.backgroundColor}
            onClick={() => onAction(action?.type, Link)}
          >
            {ButtonLabel}
          </BannerButton>
        ) : (
          <StyledLink
            color={action?.color}
            fontSize={action?.fontSize}
            fontWeight={action?.fontWeight}
            onClick={() => onAction(action?.type, Link)}
          >
            {ButtonLabel}
          </StyledLink>
        )}
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
