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
    "Plataforma de gestión de servicios de campo para programar y hacer seguimiento de solicitudes de instalación, mantenimiento y reparación.<br/><br/>Desarrollada con React y Django REST Framework con PostgreSQL, incluye dashboards con roles diferenciados para coordinadores y técnicos, asignación de solicitudes y seguimiento completo del historial de servicios.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow0,
        alt: "Panel de Servicio",
        caption: "Panel de Servicio",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow1,
        alt: "Detalle de Solicitud",
        caption: "Detalle de Solicitud",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow2,
        alt: "Registro de Cliente",
        caption: "Registro de Cliente",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow3,
        alt: "Formulario de Solicitud",
        caption: "Formulario de Solicitud",
      },
    },
  ],
} as const satisfies ProjectContent;