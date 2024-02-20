import { create } from "zustand";

export const useBannerStore = create((set) => ({
  campaignImage: "",
  campaignTranslate: "",
  campaignConfig: "",

  fetch: async (campaignName, language) => {
    const imageRes = `/images/campaign.${campaignName.toLowerCase()}.svg`;
    const translateRes = await fetch(
      `/locales/${language}/Campaign${campaignName}.json`
    );
    const configRes = await fetch(`/configs/Campaign${campaignName}.json`);
    set({
      campaignImage: imageRes,
      campaignTranslate: await translateRes.json(),
      campaignConfig: await configRes.json(),
    });
  },
}));
