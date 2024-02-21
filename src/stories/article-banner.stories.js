import React from "react";
import { Layout } from "../components/Layout";

import lngs from "../../languages.json";

const options = lngs.map((t) => t.shortKey);

export default {
  title: "Example/ArticleBanner",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    campaignName: {
      control: {
        type: "select",
      },
      options: [
        "CreateDocSpace",
        "OnlyofficeForDevelopers",
        "OnlyofficeForPlatform",
        "BookTraining",
        "FormGallery",
      ],
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
  campaignName: "CreateDocSpace",
  language: "en",
};
