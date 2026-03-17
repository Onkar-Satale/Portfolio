import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';

// Updated type definition for better clarity
interface TimelineItemData {
  id: string;
  logo: string | null;
  role?: string;
  companyName?: string;
  companyLink?: string;
  courseName?: string;
  institutionName?: string;
  institutionLink?: string;
  grade?: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  skills?: { name: string; image?: string | null }[]; // Updated to include images
  type: 'experience' | 'education';
}

export default function Timeline({ items }: { items: TimelineItemData[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {items.map((item, index) => (
        <motion.div key={item.id} variants={itemVariants}>
          <TimelineItem item={item} isLast={index === items.length - 1} />
        </motion.div>
      ))}
    </motion.div>
  );
}
