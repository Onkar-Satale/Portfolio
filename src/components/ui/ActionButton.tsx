import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ActionButtonProps {
  href?: string;
  variant?: 'primary' | 'outline';
  children: ReactNode;
  isExternal?: boolean;
  download?: string | boolean;
  onClick?: (e?: any) => void;
  className?: string;
}

export default function ActionButton({ 
  href, 
  variant = 'primary', 
  children, 
  isExternal = false, 
  download,
  onClick, 
  className = '' 
}: ActionButtonProps) {
  const baseClasses = "cursor-pointer font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center text-base";
  
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'bg-white dark:bg-transparent text-slate-700 dark:text-neutral-200 border border-slate-200 dark:border-neutral-700 hover:border-slate-300 dark:hover:border-neutral-600 hover:bg-slate-50 dark:hover:bg-neutral-900'
  };

  const fullClassName = `${baseClasses} ${styles[variant]} ${className}`;

  // If an href is provided, render a link
  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        download={download}
        className={fullClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render a button
  return (
    <button
      onClick={onClick}
      className={fullClassName}
    >
      {children}
    </button>
  );
}