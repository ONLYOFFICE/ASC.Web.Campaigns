import React, { useEffect, useState } from "react";
import {
  BannerWrapper,
  BannerContent,
  BannerButton,
  StyledText,
  StyledLink,
  StyledAction,
} from "./styled-banner";
import cross from "../../images/cross.react.svg";

const Banner = (props) => {
  const { campaignImage, campaignTranslate, campaignConfig } = props;
  const { Header, SubHeader, Text, ButtonLabel, Link } = campaignTranslate;
  const { borderColor, title, body, text, action } = campaignConfig;

  const hasTitle = !!Header;
  const hasBodyText = !!SubHeader;
  const hasText = !!Text;
  const isButton = action?.isButton;

  const [fontSize, setFontSize] = useState(parseInt(body?.fontSize) || 13);

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

  useEffect(() => {
    setFontSize(parseInt(body?.fontSize) || 13);
  }, [campaignTranslate]);

  useEffect(() => {
    const el = document.getElementById("banner");
    const isOverflow = el.scrollHeight > el.offsetHeight;
    if (isOverflow) {
      setFontSize((prevFontSize) => prevFontSize - 1);
    }
  }, [fontSize, campaignTranslate, campaignImage]);

  return (
    <BannerWrapper
      id="banner"
      background={campaignImage}
      borderColor={borderColor}
    >
      <BannerContent>
        {hasTitle && (
          <StyledText
            className="header"
            color={title?.color}
            fontSize={title?.fontSize}
            fontWeight={title?.fontWeight}
          >
            {Header}
          </StyledText>
        )}
        <div>
          {hasBodyText && (
            <StyledText
              color={body?.color}
              fontSize={`${fontSize}px`}
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
        </div>
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
      <StyledAction>
        <img className="cross" src={cross} />
      </StyledAction>
    </BannerWrapper>
  );
};

export default Banner;
