import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getRecentProjects, STATIC_PROJECTS } from '../services/projectService';
import ProjectCard from './projects/ProjectCard';
import { FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';

export default function FeaturedProjectsSection() {
  const [inView, setInView] = useState(false);

  const { data: projectsResponse, isLoading, isError } = useQuery({
    queryKey: ['all6FeaturedProjects', 'v4'],
    queryFn: getRecentProjects,
    initialData: STATIC_PROJECTS,
    staleTime: 1000 * 60 * 5,
  });

  const projects = Array.isArray(projectsResponse)
    ? projectsResponse
    : (projectsResponse as any)?.data || STATIC_PROJECTS;

  // Duplicate all 6 projects so the marquee loops seamlessly in an infinite cycle (6 + 6 = 12 cards in track)
  const marqueeProjects = [...projects, ...projects];

  return (
    <motion.section
      id="projects"
      className="py-20 md:py-28 bg-slate-100/70 dark:bg-transparent transition-colors duration-300 overflow-hidden"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Featured Projects"
            description="All 6 major engineering projects cycling continuously. Hover over any project to pause in place and explore."
          />
        </motion.div>
      </div>

      {/* Full-width Infinite Moving Marquee Carousel with all 6 projects */}
      <div className="mt-12 min-h-[28rem] relative w-full overflow-hidden">
        {/* Left & Right Fade Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-slate-100 dark:from-black to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-slate-100 dark:from-black to-transparent pointer-events-none z-10" />

        {isLoading && !projects.length && (
          <div className="flex items-center justify-center min-h-[20rem]">
            <Loader />
          </div>
        )}

        {isError && !projects.length && (
          <div className="text-center text-red-500 py-12">
            <FiAlertTriangle className="mx-auto text-2xl mb-2" />
            Could not load projects.
          </div>
        )}

        {projects.length > 0 && (
          <div className="w-full overflow-hidden py-4">
            <div className="animate-marquee-scroll flex gap-8 items-stretch">
              {marqueeProjects.map((project: any, index: number) => (
                <div
                  key={`${project.id}-${index}`}
                  className="w-[320px] sm:w-[380px] md:w-[410px] lg:w-[440px] shrink-0 flex flex-col"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 mt-12 text-center">
        <Link
          to="/projects"
          className="font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-600 transition-all duration-200 inline-block transform hover:scale-105 active:scale-95"
        >
          View All Projects &rarr;
        </Link>
      </div>
    </motion.section>
  );
}