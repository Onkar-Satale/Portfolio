import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import SectionHeader from './ui/SectionHeader';
import Loader from './ui/Loader';
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { getCertifications } from '../services/certificationsService';

export default function CertificationsSection() {
  const { data: certifications = [], isLoading } = useQuery({
    queryKey: ['certifications'],
    queryFn: getCertifications,
  });

  return (
    <motion.section
      id="certifications"
      className="py-20 md:py-28 bg-white dark:bg-black transition-colors duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Certifications"
          description="Continuous learning & specialized professional qualifications."
        />

        {isLoading ? (
          <div className="mt-12 flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-50 dark:bg-neutral-900/90 border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-600 rounded-xl">
                      <FiAward size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-600 tracking-wider uppercase">
                        {cert.issuer} • {cert.platform}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-neutral-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {cert.skillsLearned && cert.skillsLearned.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300"
                        >
                          <FiCheckCircle size={12} className="text-blue-600" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {cert.certificateLink && (
                  <a
                    href={cert.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-sm"
                  >
                    <FiExternalLink size={16} />
                    View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
