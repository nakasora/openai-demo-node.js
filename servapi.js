import { getJson } from "serpapi";

getJson(
  {
    engine: "google",
    q: "2023年10月現在の日本の首相は誰ですか",
    location: "Tokyo,Japan",
    hl: "ja",
    gl: "jp",
    google_domain: "google.co.jp",
    num: "10",
    start: "10",
    safe: "active",
    api_key: "bfff5fc1367d93db16f2664a738bd942fb7c882ef9c201bc0c87b32c9a8c812b",
  },
  (json) => {
    console.log(json["organic_results"]);
  }
);
