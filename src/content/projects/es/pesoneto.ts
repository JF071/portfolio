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
    "Sitio web corporativo para Peso Neto, empresa colombiana de básculas y soluciones de pesaje industrial.<br/><br/>Desarrollado con Angular 19 en una arquitectura modular basada en features con lazy loading, Docker multi-stage builds y despliegue CI/CD automatizado mediante Dokploy en un VPS propio.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto2,
        alt: "Inicio",
        caption: "Inicio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto0,
        alt: "Productos Destacados",
        caption: "Productos Destacados",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto1,
        alt: "¿Por qué Peso Neto?",
        caption: "¿Por qué Peso Neto?",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pesoneto3,
        alt: "Redes Sociales",
        caption: "Redes Sociales",
      },
    },
  ],
} as const satisfies ProjectContent;