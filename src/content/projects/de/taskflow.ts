import taskflow0 from "../../../assets/images/projects/taskflow/taskflow-0.webp";
import taskflow1 from "../../../assets/images/projects/taskflow/taskflow-1.webp";
import taskflow2 from "../../../assets/images/projects/taskflow/taskflow-2.webp";
import taskflow3 from "../../../assets/images/projects/taskflow/taskflow-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "TaskFlow",
  theme: "light",
  tags: ["react", "django", "postgresql"],
  source: "https://github.com/JADER124/TaskFlow",
  description:
    "Außendienst-Management-Plattform zur Planung und Verfolgung von Installations-, Wartungs- und Reparaturaufträgen.<br/><br/>Entwickelt mit React und Django REST Framework mit PostgreSQL, mit rollenbasierten Dashboards für Koordinatoren und Techniker, Auftragszuweisung und vollständiger Servicehistorie.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow0,
        alt: "Service-Dashboard",
        caption: "Service-Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow1,
        alt: "Auftragsdetail",
        caption: "Auftragsdetail",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow2,
        alt: "Kundenregistrierung",
        caption: "Kundenregistrierung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow3,
        alt: "Serviceantrag-Formular",
        caption: "Serviceantrag-Formular",
      },
    },
  ],
} as const satisfies ProjectContent;