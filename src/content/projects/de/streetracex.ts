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
    "Street-Racing-Challenge-Plattform — derzeit aktiv in Entwicklung. Das Backend-API ist vollständig implementiert; das Frontend ist der nächste Meilenstein.<br/><br/>Aufgebaut auf einer Hexagonalen Architektur (Ports & Adapters) mit strikter Domain → Application → Infrastructure-Trennung und einem Composition Root für Dependency Injection. Die REST-API umfasst Auth (JWT + HttpOnly-Refresh-Token-Rotation), Profilverwaltung, Garage (bis zu 3 Fahrzeuge), Rang-basiertes Matchmaking (D → C → B → A → S), einen vollständigen Challenge-Flow (senden → akzeptieren → starten → Ergebnis → Admin-Streitbeilegung), Pisten und In-App-Benachrichtigungen — alles dokumentiert via modularer OpenAPI/Swagger mit Zod-Validierung pro Endpoint.<br/><br/>Stack: Node.js 22, TypeScript 5.6, PostgreSQL mit Prisma ORM. WebSockets (Socket.io) und ein React/Next.js-Frontend sind als nächste Meilensteine geplant.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex0,
        alt: "Spielerprofil",
        caption: "Spielerprofil",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex1,
        alt: "Herausforderungen",
        caption: "Herausforderungen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex2,
        alt: "Rivalen",
        caption: "Rivalen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex3,
        alt: "Garage",
        caption: "Garage",
      },
    },
  ],
} as const satisfies ProjectContent;