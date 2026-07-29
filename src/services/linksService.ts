// ✅ Interface for a social link
export interface SocialLink {
  type: string; // e.g., 'github', 'linkedin'
  url: string;
}

const STATIC_LINKS: SocialLink[] = [
  { type: "github", url: "https://github.com/Onkar-Satale" },
  { type: "linkedin", url: "https://linkedin.com/in/onkar-satale" },
  { type: "email", url: "mailto:onkarsatale4@gmail.com" },
  { type: "phone", url: "tel:+918446004736" }
];

// ✅ Function to fetch links from API
export const getLinks = async (): Promise<SocialLink[]> => {
  return Promise.resolve(STATIC_LINKS);
};
