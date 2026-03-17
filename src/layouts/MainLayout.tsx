import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ui/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 min-h-screen">
      <ScrollToTop />
      <Header />
      {/* THIS IS THE KEY FIX: The pt-16 (padding-top) ensures page content
          always starts BELOW the fixed header. */}
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}