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
    "Unternehmens-Website für Peso Neto, ein kolumbianisches Unternehmen für Industrie- und Wiegelösungen.<br/><br/>Entwickelt mit Angular 19 in einer modularen Feature-Architektur mit Lazy Loading, Docker-Multi-Stage-Builds und automatisiertem CI/CD-Deployment über Dokploy auf einem selbst gehosteten VPS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto2,
        alt: "Startseite",
        caption: "Startseite",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto0,
        alt: "Ausgewählte Produkte",
        caption: "Ausgewählte Produkte",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto1,
        alt: "Warum Peso Neto",
        caption: "Warum Peso Neto",
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
