import streetracex0 from "../../../assets/images/projects/streetracex/streetracex-0.webp";
import streetracex1 from "../../../assets/images/projects/streetracex/streetracex-1.webp";
import streetracex2 from "../../../assets/images/projects/streetracex/streetracex-2.webp";
import streetracex3 from "../../../assets/images/projects/streetracex/streetracex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreetRaceX",
  theme: "dark",
  tags: ["node", "typescript", "postgresql", "prisma"],
  source: "https://github.com/Juangonzalez09/streetracex",
  description:
    "Plataforma de retos de carrera callejera — actualmente en desarrollo activo. El API backend está completamente implementado; el frontend es el siguiente hito.<br/><br/>Construido sobre una Arquitectura Hexagonal (Ports & Adapters) con separación estricta Domain → Application → Infrastructure y un Composition Root para inyección de dependencias. El API REST cubre auth (JWT + rotación de refresh token HttpOnly), gestión de perfil, garaje (hasta 3 vehículos), matchmaking por rango (D → C → B → A → S), flujo completo de retos (enviar → aceptar → iniciar → resultado → resolución por admin), pistas y notificaciones internas — todo documentado mediante OpenAPI/Swagger modular con validación Zod por endpoint.<br/><br/>Stack: Node.js 22, TypeScript 5.6, PostgreSQL con Prisma ORM. WebSockets (Socket.io) y un frontend React/Next.js están planificados como próximos hitos.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex0,
        alt: "Perfil del Piloto",
        caption: "Perfil del Piloto",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex1,
        alt: "Retos",
        caption: "Retos",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex2,
        alt: "Rivales",
        caption: "Rivales",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex3,
        alt: "Garaje",
        caption: "Garaje",
      },
    },
  ],
} as const satisfies ProjectContent;