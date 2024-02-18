import React from "react";

import {
  StyledSection,
  Icon,
  Name,
  MainLoader,
  FilterLoader,
  SectionContent,
  SectionHeader,
  SectionWrapper,
} from "./styled-section";

export const Section = () => {
  const elements = [];

  for (let i = 0; i < 14; i++) {
    elements.push(
      <SectionContent key={i}>
        <Icon />
        <Name />
        <MainLoader />
      </SectionContent>
    );
  }

  return (
    <StyledSection>
      <SectionWrapper>
        <SectionHeader>My documents</SectionHeader>
        <FilterLoader />
        {elements}
      </SectionWrapper>
    </StyledSection>
  );
};
