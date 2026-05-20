import pesoneto0 from "../../../assets/images/projects/pesoneto/pesoneto-0.webp";
import pesoneto1 from "../../../assets/images/projects/pesoneto/pesoneto-1.webp";
import pesoneto2 from "../../../assets/images/projects/pesoneto/pesoneto-2.webp";
import pesoneto3 from "../../../assets/images/projects/pesoneto/pesoneto-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Peso Neto",
  theme: "light",
  tags: ["angular", "typescript", "scss"],
  live: "https://basculaspesoneto.com",
  source: "https://github.com/Juangonzalez09/PCTO1-WebPesoNeto",
  description:
    "Corporate web app for Peso Neto, a Colombian industrial scale and weighing solutions company.<br/><br/>Built with Angular 19 using a feature-based modular architecture with lazy loading, Docker multi-stage builds, and automated CI/CD deployment via Dokploy on a self-hosted VPS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto2,
        alt: "Hero",
        caption: "Hero",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto0,
        alt: "Featured Products",
        caption: "Featured Products",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto1,
        alt: "Why Peso Neto",
        caption: "Why Peso Neto",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto3,
        alt: "Social Media",
        caption: "Social Media",
      },
    },
  ],
} as const satisfies ProjectContent;