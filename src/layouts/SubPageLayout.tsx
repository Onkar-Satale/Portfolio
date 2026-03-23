import { Outlet, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from './Footer';

export default function SubPageLayout() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-black min-h-screen text-slate-800 dark:text-neutral-200 transition-colors duration-300">
      <header className="bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-slate-200 dark:border-neutral-800 sticky top-0 z-30 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={() => navigate(-1)} // This programmatically goes to the previous page
            className="font-semibold text-slate-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <FiArrowLeft />
            Back
          </button>
        </div>
      </header>
      <main>
        {/* The child page (e.g., ProjectsPage) will be rendered here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}