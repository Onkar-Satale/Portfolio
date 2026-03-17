import { Link } from 'react-router-dom';
import { FiBox, FiArrowUp } from 'react-icons/fi';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useState, useEffect } from 'react';

// Social icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    const { links } = usePortfolioData();
    const currentYear = new Date().getFullYear();

    // --- STATE MANAGEMENT ---
    const [githubLink, setGithubLink] = useState('');
    const [linkedinLink, setLinkedinLink] = useState('');

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        if (links && links.length > 0) {
            links.forEach((data: any) => {
                if (data.type === "github") setGithubLink(data.url);
                if (data.type === "linkedin") setLinkedinLink(data.url);
            });
        }
    }, [links]);

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="border-t border-slate-200 dark:border-slate-800 py-6 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="text-center lg:text-left">
                        <Link to="/" className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                            <FiBox className="w-6 h-6 text-blue-600" />
                            <span className="text-lg font-bold text-slate-800 dark:text-white">MyMind</span>
                        </Link>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            &copy; {currentYear} Satale Onkar K. All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Social Media Icons from Firebase */}
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <FaGithub size={20} />
                            </a>
                        )}
                        {linkedinLink && (
                            <a
                                href={linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        )}

                        {/* Terms & Conditions */}
                        <Link
                            to="/terms"
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:underline transition-colors"
                        >
                            Terms & Conditions
                        </Link>

                        {/* Scroll to top button */}
                        <button
                            onClick={handleScrollToTop}
                            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                            title="Back to top"
                        >
                            <FiArrowUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
