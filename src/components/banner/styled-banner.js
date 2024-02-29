import styled from "styled-components";

const BannerWrapper = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 140px;
  max-height: 140px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.borderColor};
  background-image: url(${(props) => props.background});
  background-size: 100%;
`;

const BannerContent = styled.div`
  overflow: hidden;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .header {
    max-width: 167px;
  }
`;

const BannerButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 4px 12px;
  border-radius: 32px;
  border: none;
  background: ${(props) => props.buttonColor};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.buttonTextColor};
`;

const StyledText = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

const StyledLink = styled.a`
  margin: 0;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  &:hover {
    text-decoration: underline;
  }
`;

const StyledAction = styled.div`
  .cross {
    position: absolute;
    height: 12px;
    width: 12px;
    right: 14px;
    top: 18px;
  }
`;

export {
  BannerWrapper,
  BannerContent,
  BannerButton,
  StyledText,
  StyledLink,
  StyledAction,
};
