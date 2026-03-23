// src/components/SkillsSection.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PublicSkillPill from './skills/PublicSkillPill';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';
import { useQuery } from '@tanstack/react-query';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGit, FaDocker
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiBootstrap, SiExpress,
  SiFirebase, SiMongodb, SiGithub, SiPostman, SiCanva,SiAngular,
} from 'react-icons/si';
import { getSkillCategories, type SkillCategory } from '../services/skillsService';

// Map iconKey to React icon component
const ICON_MAP: Record<string, JSX.Element> = {
  html: <FaHtml5 className="text-orange-500 w-6 h-6" />,
  css: <FaCss3Alt className="text-blue-600 w-6 h-6" />,
  js: <FaJsSquare className="text-yellow-400 w-6 h-6" />,
  react: <FaReact className="text-blue-400 w-6 h-6" />,
  typescript: <SiTypescript className="text-blue-600 w-6 h-6" />,
  angular: <SiAngular className="text-red-600 w-6 h-6" />,
  tailwind: <SiTailwindcss className="text-teal-500 w-6 h-6" />,
  bootstrap: <SiBootstrap className="text-purple-600 w-6 h-6" />,
  node: <FaNodeJs className="text-green-600 w-6 h-6" />,
  express: <SiExpress className="text-gray-800 w-6 h-6" />,
  firebase: <SiFirebase className="text-yellow-500 w-6 h-6" />,
  mongodb: <SiMongodb className="text-green-700 w-6 h-6" />,
  git: <FaGit className="text-red-500 w-6 h-6" />,
  github: <SiGithub className="text-gray-800 w-6 h-6" />,
  postman: <SiPostman className="text-orange-400 w-6 h-6" />,
  canva: <SiCanva className="text-blue-400 w-6 h-6" />,
  docker: <FaDocker className="text-sky-500 w-6 h-6" />,
};

export default function SkillsSection() {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  // Fetch categories from Firebase
  const { data: categories = [], isLoading, isError, error } = useQuery({
    queryKey: ['skillCategories'],
    queryFn: getSkillCategories,
    staleTime: 1000 * 60 * 5,
  });

  // Debugging
  useEffect(() => {
    console.log('✅ Fetched skill categories:', categories);
    if (isError) console.error('❌ Error fetching skill categories:', error);
  }, [categories, isError, error]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const skillWallVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  // Loading state
  if (isLoading) {
    return (
      <section id="skills" className="py-20 md:py-28 border-y bg-slate-50 dark:bg-black border-slate-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="container mx-auto px-6 min-h-[20rem] flex items-center justify-center">
          <Loader />
        </div>
      </section>
    );
  }

  // Error or empty fallback
  if (isError || categories.length === 0) {
    return (
      <section id="skills" className="py-20 md:py-28 border-y bg-slate-50 dark:bg-black border-slate-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-neutral-400">
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">No skills found ⚠️</h3>
          <p>Check your Firebase “skills” collection or data format.</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="skills"
      className="py-20 md:py-28 border-y bg-slate-50 dark:bg-black border-slate-200 dark:border-neutral-800 transition-colors duration-300"
      onViewportEnter={() => setHasBeenInView(true)}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title="Technologies & Skills"
            description="From logic to launch—this is how I build the future."
          />
        </motion.div>

        {/* Skills */}
        <div className="mt-16 min-h-[20rem]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={hasBeenInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {categories.map((category: SkillCategory) => (
              <motion.div key={category.id} variants={containerVariants}>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-6">
                  {category.name}
                </h3>

                <motion.div
                  variants={skillWallVariants}
                  className="flex flex-wrap justify-center gap-4"
                >
                  {category.skills?.length ? (
                    category.skills.map((skill) => {
                      // Hybrid mode: prefer image, fallback to iconKey, finally fallback to first letter
                      const iconElement = skill.image
                        ? (
                          <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-6 h-6 object-contain"
                          />
                        )
                        : skill.iconKey && ICON_MAP[skill.iconKey]
                          ? ICON_MAP[skill.iconKey]
                          : (
                            <div className="w-6 h-6 flex items-center justify-center bg-slate-200 dark:bg-neutral-800 rounded-full text-xs font-bold text-slate-600 dark:text-neutral-300">
                              {skill.name?.charAt(0) || '?'}
                            </div>
                          );

                      return (
                        <PublicSkillPill
                          key={skill.id}
                          skill={{
                            id: skill.id,
                            name: skill.name,
                            icon: iconElement,
                          }}
                        />
                      );
                    })
                  ) : (
                    <p className="text-slate-500 dark:text-neutral-400 text-sm text-center w-full">
                      No skills added for this category yet.
                    </p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
