import { useState, useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import JourneySection from '../components/JourneySection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import ContactSection from '../components/ContactSection';
import Terms from "../components/terms";

import { getAboutData, type AboutData } from '../services/aboutService';
import { getLinks, type SocialLink } from '../services/linksService';

export default function HomePage() {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [links, setLinks] = useState<{ [key: string]: string }>({
    github: "#",
    linkedin: "#",
  });

  useEffect(() => {
    // Fetch About data
    const fetchAbout = async () => {
      const data = await getAboutData();
      setAbout(data);
    };

    // Fetch social links
    const fetchLinks = async () => {
      const data: SocialLink[] = await getLinks();
      const linkObj: { [key: string]: string } = {};
      data.forEach(link => {
        linkObj[link.type] = link.url;
      });
      setLinks(linkObj);
    };

    fetchAbout();
    fetchLinks();
  }, []);

  if (!about) return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;

  return (
    <>
      <AboutSection about={about} links={links} />
      <SkillsSection />
      <FeaturedProjectsSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
