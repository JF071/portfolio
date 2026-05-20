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
    description: "Sistema empresarial de clientes",
  },
  {
    title: "Peso Neto",
    slug: "pesoneto",
    thumbnail: thumbnailPesoneto,
    description: "Sitio web corporativo",
  },
  {
    title: "TaskFlow",
    slug: "taskflow",
    thumbnail: thumbnailTaskflow,
    description: "Gestión de servicios de campo",
  },
  {
    title: "StreetRaceX",
    slug: "streetracex",
    thumbnail: thumbnailStreetracex,
    description: "Plataforma de carreras",
  },
] as const satisfies ProjectPreview[];