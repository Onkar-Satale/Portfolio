import { Toaster as HotToaster } from 'react-hot-toast';

export default function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--toast-bg, #ffffff)',
          color: 'var(--toast-color, #0f172a)',
          border: '1px solid var(--toast-border, #e2e8f0)',
          fontWeight: 500,
          borderRadius: '0.75rem',
          padding: '12px 16px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: 'var(--toast-bg, #ffffff)',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: 'var(--toast-bg, #ffffff)',
          },
        },
      }}
    />
  );
}