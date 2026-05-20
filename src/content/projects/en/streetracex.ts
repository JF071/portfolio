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
    "Street racing challenge platform — currently in active development. The backend API is fully implemented; the frontend is a next milestone.<br/><br/>Built on a Hexagonal Architecture (Ports & Adapters) with a strict Domain → Application → Infrastructure separation and a composition root for dependency injection. The REST API covers auth (JWT + HttpOnly refresh token rotation), profile management, garage (up to 3 vehicles), ranked matchmaking (D → C → B → A → S), a full challenge flow (send → accept → start → result → admin dispute resolution), tracks, and in-app notifications — all documented via modular OpenAPI/Swagger with Zod validation per endpoint.<br/><br/>Stack: Node.js 22, TypeScript 5.6, PostgreSQL with Prisma ORM. WebSockets (Socket.io) and a React/Next.js frontend are planned as next milestones.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex0,
        alt: "Player Profile",
        caption: "Player Profile",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex1,
        alt: "Challenges",
        caption: "Challenges",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streetracex2,
        alt: "Rivals",
        caption: "Rivals",
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