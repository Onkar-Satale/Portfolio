import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';
import { FiUsers, FiCheckCircle } from 'react-icons/fi';
import { getLeadershipExperience } from '../services/leadershipService';

export default function LeadershipSection() {
  const { data: leadershipItems = [], isLoading } = useQuery({
    queryKey: ['leadership'],
    queryFn: getLeadershipExperience,
  });

  return (
    <motion.section
      id="leadership"
      className="py-20 md:py-28 bg-slate-50 dark:bg-black transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Leadership & Activities"
          description="Community involvement, teamwork, and technical mentorship."
        />

        {isLoading ? (
          <div className="mt-12 flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadershipItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-neutral-900/90 border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-600 rounded-xl">
                    <FiUsers size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-600 tracking-wide uppercase">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-400">
                      <FiCheckCircle className="text-blue-600 mt-0.5 flex-shrink-0" size={14} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
