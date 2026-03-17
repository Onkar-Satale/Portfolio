// ✅ Interface for a social link
export interface SocialLink {
  type: string; // e.g., 'github', 'linkedin'
  url: string;
}

const STATIC_LINKS: SocialLink[] = [
  { type: "github", url: "https://github.com/Onkar-Satale" }, // Preserved from package.json/original
  { type: "linkedin", url: "https://linkedin.com/" } // Add your LinkedIn URL
];

// ✅ Function to fetch links from API
export const getLinks = async (): Promise<SocialLink[]> => {
  return Promise.resolve(STATIC_LINKS);
};
