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
    description: "Enterprise client management",
  },
  {
    title: "Peso Neto",
    slug: "pesoneto",
    thumbnail: thumbnailPesoneto,
    description: "Corporate web app",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    thumbnail: thumbnailTaskflow,
    description: "Field service management",
  },
  {
    title: "StreetRaceX",
    slug: "streetracex",
    thumbnail: thumbnailStreetracex,
    description: "Street racing platform",
  },
] as const satisfies ProjectPreview[];