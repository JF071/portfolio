export const social = [
  { url: "mailto:felipe07132003@gmail.com", name: "mail" },
  { url: "https://github.com/JF071", name: "github" },
  { url: "https://www.linkedin.com/in/juan-felipe-avila-patiño-98074b250/", name: "linkedin" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github"  | "linkedin" }[];
