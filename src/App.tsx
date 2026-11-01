import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext';


const Premium = lazy(() => import('./pages/Premium'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));
const Contact = lazy(() => import('./pages/legal/Contact'));
const AppFallback = lazy(() => import('./pages/AppFallback'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);

  return null;
}

const PageLoader = () => (
  <div className='flex min-h-screen items-center justify-center bg-[#0A0A0A]'>
    <div className='h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#C6F135]' />
  </div>
);


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollManager />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/premium' element={<Premium />} />
            <Route path='/payment/success' element={<PaymentSuccess />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/app/*' element={<AppFallback />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}
