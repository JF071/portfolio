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
    "RIBI CRM ist ein unternehmensweites Client-Management-System für Software-Implementierungsunternehmen.<br/><br/>Es deckt den gesamten Client-Lebenszyklus ab — von der Einarbeitung und Modulaktivierung bis hin zu Schulungen, Installationsaufgaben und Support-Tickets — mit rollenbasierter Zugriffskontrolle für Admins, Berater und Consultants.",
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
        alt: "Aufgabenverwaltung",
        caption: "Aufgabenverwaltung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm2,
        alt: "Kundendetail",
        caption: "Kundendetail",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm3,
        alt: "Rollenberechtigungen",
        caption: "Rollenberechtigungen",
      },
    },
  ],
} as const satisfies ProjectContent;
