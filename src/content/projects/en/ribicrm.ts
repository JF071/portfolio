import ribicrm0 from "../../../assets/images/projects/ribicrm/ribicrm-0.webp";
import ribicrm1 from "../../../assets/images/projects/ribicrm/ribicrm-1.webp";
import ribicrm2 from "../../../assets/images/projects/ribicrm/ribicrm-2.webp";
import ribicrm3 from "../../../assets/images/projects/ribicrm/ribicrm-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "RIBI CRM",
  theme: "light",
  tags: ["next", "typescript", "prisma", "postgresql"],
  source: "https://github.com/JF071/ribi-crm",
  description:
    "RIBI CRM is an enterprise client management system built for software implementation companies.<br/><br/>It covers the full client lifecycle — from onboarding and module activation to training, installation tasks, and support tickets — with role-based access control for admins, advisors, and consultants.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm0,
        alt: "Consultant Dashboard",
        caption: "Consultant Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm1,
        alt: "Task Management",
        caption: "Task Management",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm2,
        alt: "Client Detail",
        caption: "Client Detail",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm3,
        alt: "Role Permissions",
        caption: "Role Permissions",
      },
    },
  ],
} as const satisfies ProjectContent;
