import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import ContactForm from './contact/ContactForm';

export default function ContactSection() {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } 
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100 dark:bg-transparent border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <SectionHeader 
          title="Get In Touch"
          description="Have a project in mind or just want to connect? I'm always open to discussing new ideas and opportunities."
        />
        <div className="mt-10 max-w-xl mx-auto">
          <motion.div
            key="contact-form"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
