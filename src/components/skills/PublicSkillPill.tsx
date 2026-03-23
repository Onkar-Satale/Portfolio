import { motion } from 'framer-motion';

// Local Type Definition
interface Skill {
  id: string;
  name: string;
  icon?: JSX.Element; // Optional React icon
}

export default function PublicSkillPill({ skill }: { skill: Skill }) {
  const pillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={pillVariants}
      className="bg-white dark:bg-neutral-900 rounded-full border border-slate-200 dark:border-neutral-700 px-4 py-2 flex items-center gap-3 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:border-slate-300 dark:hover:border-neutral-600"
    >
      {skill.icon && <span className="text-2xl">{skill.icon}</span>}
      <p className="font-semibold text-slate-700 dark:text-neutral-200">{skill.name}</p>
    </motion.div>
  );
}
