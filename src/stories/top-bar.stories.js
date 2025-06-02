import React from "react";
import { Layout } from "../components/Layout";
import lngs from "../../languages.json";

const options = lngs.map((t) => t.shortKey);

export default {
  title: "Example/TopBar",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: [
        "Christmas_2022",
        "Docs_7_1",
        "Docs_7_2",
        "Docs_7_4",
        "Docs_7_5",
        "DocSpace",
        "DocSpace_2_0",
        "MoveToDocSpace",
        "Zoom_DocSpace",
        "DocSpace_2_5",
        "DocSpace_UT",
        "Docs_8_1_webinar",
        "Docs_8_1",
        "DocSpace_2_6",
        "Personal_closing",
        "Docs_8_2_20241017",
        "Docs_8_2",
        "DocSpace_3_0",
        "DocSpace_UT_3_0",
        "Docs_8_3",
        "AI_06_2025",
      ],
    },
    theme: {
      control: {
        type: "select",
      },
      options: ["light", "dark"],
    },
    language: {
      control: {
        type: "select",
      },
      options,
    },
  },
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  origin: "http://localhost:8000", // use your source
  name: "AI_06_2025",
  language: "en",
  theme: "light",
};
