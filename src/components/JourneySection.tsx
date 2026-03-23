import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from './journey/Timeline';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';
import { getExperiences } from '../services/experienceService';
import { getEducationHistory } from '../services/educationService';

export default function JourneySection() {
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experienceQuery = useQuery({ queryKey: ['experiences'], queryFn: getExperiences, enabled: inView });
  const educationQuery = useQuery({ queryKey: ['education'], queryFn: getEducationHistory, enabled: inView });

  const tabContentVariants: any = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const tabs = [
    { id: 'experience' as const, label: 'Experience' },
    { id: 'education' as const, label: 'Education' }
  ];

  // ✅ FIXED: Access the raw array returned by static service
  const experienceItems: any[] = Array.isArray(experienceQuery.data) ? experienceQuery.data : [];
  const educationItems: any[] = Array.isArray(educationQuery.data) ? educationQuery.data : [];

  const isLoading = experienceQuery.isLoading || educationQuery.isLoading;
  const isError = experienceQuery.isError || educationQuery.isError;

  return (
    <motion.section
      id="journey"
      className="py-20 md:py-28 bg-slate-50 dark:bg-black border-y border-slate-200 dark:border-neutral-800 transition-colors duration-300"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <SectionHeader title="My Journey" description="Taught by books, trained by bugs, Here is how I learned." />

        <div className="mt-12 flex justify-center">
          <div className="flex items-center p-1.5 bg-slate-200/80 dark:bg-neutral-900/80 rounded-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="cursor-pointer relative px-5 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-journey-tab-indicator"
                    className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${activeTab === tab.id ? 'text-blue-600' : 'text-slate-600 dark:text-neutral-300'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 relative max-w-3xl mx-auto min-h-[30rem]">
          {inView && isLoading && <div className="absolute inset-0 flex justify-center pt-8"><Loader /></div>}
          {inView && isError && <div className="text-center pt-8 text-red-500"><p>Could not load journey data.</p></div>}

          <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
              <motion.div key="experience" variants={tabContentVariants} initial="initial" animate="enter" exit="exit">
                <Timeline items={experienceItems} />
              </motion.div>
            )}
            {activeTab === 'education' && (
              <motion.div key="education" variants={tabContentVariants} initial="initial" animate="enter" exit="exit">
                <Timeline items={educationItems} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
