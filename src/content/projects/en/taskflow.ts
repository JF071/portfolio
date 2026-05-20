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
    "Field service management platform for scheduling and tracking installation, maintenance, and repair requests.<br/><br/>Built with React and Django REST Framework backed by PostgreSQL, featuring role-based dashboards for coordinators and technicians, request assignment, and full service history tracking.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow0,
        alt: "Service Dashboard",
        caption: "Service Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow1,
        alt: "Request Detail",
        caption: "Request Detail",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow2,
        alt: "Client Registration",
        caption: "Client Registration",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: taskflow3,
        alt: "Service Request Form",
        caption: "Service Request Form",
      },
    },
  ],
} as const satisfies ProjectContent;