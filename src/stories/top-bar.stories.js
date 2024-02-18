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
      options: ["Docs_7_1", "DocSpace", "MoveToDocSpace"],
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
  name: "Docs_7_1",
  language: "en",
  theme: "light",
};
