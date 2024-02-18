import React, { useState, useEffect } from "react";

import { Article } from "./article/Article";
import { Section } from "./section/Section";
import { Dark, Base } from "./theme/index";
import { ThemeProvider } from "styled-components";
import { StyledIframe, StyledAction } from "./section/styled-section";
import cross from "./section/images/cross.react.svg";

export const Layout = ({ theme, name, origin, language }) => {
  const [visible, setVisible] = useState(true);

  const themes = {
    light: Base,
    dark: Dark,
  };

  const onResize = () => {
    if (window.innerWidth < 1025) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // useEffect(() => {
  //   setLanguage(lang);
  // }, [lang]);

  // const [language, setLanguage] = useState(lang || "en");
  const url = `${origin}/${language}/${name}`;

  return (
    <ThemeProvider theme={themes[theme || "light"]}>
      <div style={{ position: "relative", height: "60px" }}>
        <StyledIframe scrolling="no" className="iframe" src={url} />
        <StyledAction>
          <img style={{ width: "16px" }} src={cross} />
        </StyledAction>
      </div>
      <div className="container" style={{ display: "flex" }}>
        {visible && window.innerWidth > 1025 && <Article />}
        <Section name={name} origin={origin} lang={language} />
      </div>
    </ThemeProvider>
  );
};
