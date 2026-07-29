export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

const STATIC_LEADERSHIP: LeadershipItem[] = [
  {
    id: "pict-nss",
    role: "NSS Volunteer",
    organization: "PICT NSS Rural Social Programs",
    description: "Volunteered in PICT NSS rural social initiatives, actively participating in community development, team organization, and social welfare drives.",
    highlights: [
      "Promoted teamwork, adaptability, and rural community outreach.",
      "Managed event logistics and project management for community awareness campaigns."
    ]
  },
  {
    id: "webdev-sig",
    role: "Organizer - Web Dev SIG",
    organization: "ACM Club (PICT)",
    description: "Organized Web Development Special Interest Group (SIG) under the ACM Student Chapter to foster peer learning and technical development.",
    highlights: [
      "Fostered student mentoring, technical communication, and team growth.",
      "Organized workshops, code reviews, and project collaboration sessions for students."
    ]
  }
];

export const getLeadershipExperience = async (): Promise<LeadershipItem[]> => {
  return Promise.resolve(STATIC_LEADERSHIP);
};
