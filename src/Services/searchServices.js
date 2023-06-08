import * as httprequest from "~/utils/httprequest";

export const search = async (keywords) => {
  try {
    const res = await httprequest.get("user/search", {
      params: {
        keywords,
        // count,
        // cursor,
      },
      headers: {
        "x-rapidapi-key": "a4dd86eb2fmshe7e6325f9ff6d3ep19a868jsn1ca9becd964b",
        "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
      },
    });
    return res.data.user_list;
  } catch (error) {
    console.log(error);
  }
};
