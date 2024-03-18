import { create } from "zustand";

export const useBannerStore = create((set) => ({
  campaignImage: "",
  campaignTranslate: "",
  campaignConfig: "",

  fetch: async (campaignName, language) => {
    const imageRes = `/images/campaign.${campaignName.toLowerCase()}.svg`;
    let translateRes = await fetch(
      `/locales/${language}/Campaign${campaignName}.json`
    );

    if (!translateRes.ok) {
      translateRes = await fetch(`/locales/en/Campaign${campaignName}.json`);
    }

    const configRes = await fetch(`/configs/Campaign${campaignName}.json`);
    set({
      campaignImage: imageRes,
      campaignTranslate: translateRes.ok ? await translateRes.json() : {},
      campaignConfig: configRes.ok ? await configRes.json() : {},
    });
  },
}));
