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
    "Sistema empresarial de gestión de clientes para empresas de implementación de software.<br/><br/>Cubre el ciclo de vida completo del cliente — desde el onboarding y activación de módulos hasta capacitaciones, tareas de instalación y tickets de soporte — con control de acceso por roles para administradores, asesores y consultores.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm0,
        alt: "Panel del Consultor",
        caption: "Panel del Consultor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm1,
        alt: "Gestión de Tareas",
        caption: "Gestión de Tareas",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm2,
        alt: "Detalle del Cliente",
        caption: "Detalle del Cliente",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ribicrm3,
        alt: "Permisos por Rol",
        caption: "Permisos por Rol",
      },
    },
  ],
} as const satisfies ProjectContent;