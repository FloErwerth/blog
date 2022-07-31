import * as React from "react";
const Github = require("./github.svg") as string;
const Instagram = require("./instagram.svg") as string;
const Twitter = require("./twitter.svg") as string;
const AdSense = require("./AdSense_Logo.svg") as string;
const Moon = require("./moon.svg") as string;
const Sun = require("./sun.svg") as string;

type SocialLogos = "github" | "twitter" | "instagram";
type PrivacyLogos = "adsense";
type ThemeSwitcherLogos = "moon" | "sun";

export type AvailableLogos = SocialLogos | PrivacyLogos | ThemeSwitcherLogos;

export function getSvg(requestedSVG: AvailableLogos): string {
  switch (requestedSVG) {
    case "github": return Github;
    case "instagram": return Instagram;
    case "twitter": return Twitter;
    case "adsense": return AdSense;
    case "moon": return Moon;
    case "sun": return Sun;
  }
}


