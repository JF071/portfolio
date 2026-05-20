import thumbnailRibicrm from "../../../assets/thumbnails/ribicrm.webp";
import thumbnailPesoneto from "../../../assets/thumbnails/pesoneto.webp";
import thumbnailTaskflow from "../../../assets/thumbnails/taskflow.webp";
import thumbnailStreetracex from "../../../assets/thumbnails/streetracex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "RIBI CRM",
    slug: "ribicrm",
    thumbnail: thumbnailRibicrm,
    description: "Unternehmens-CRM-System",
  },
  {
    title: "Peso Neto",
    slug: "pesoneto",
    thumbnail: thumbnailPesoneto,
    description: "Unternehmens-Website",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    thumbnail: thumbnailTaskflow,
    description: "Außendienst-Management",
  },
  {
    title: "StreetRaceX",
    slug: "streetracex",
    thumbnail: thumbnailStreetracex,
    description: "Street-Racing-Plattform",
  },
] as const satisfies ProjectPreview[];