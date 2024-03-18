import React from "react";
import { Layout } from "../components/Layout";
import lngs from "../../languages.json";

const options = lngs.map((t) => t.shortKey);

export default {
  title: "Example/Zoom_DocSpace",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
    language: {
      control: {
        type: "select",
        options,
      },
    },
  },
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  origin: "http://localhost:8000", // use your source
  name: "Zoom_DocSpace",
  language: "en",
  theme: "light",
};
