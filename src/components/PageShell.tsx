import type { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';


const PageShell = ({ children }: { children: ReactNode }) => (
  <div className='min-h-screen bg-[#0A0A0A] text-white'>
    <Navbar />
    <main className='pt-28'>{children}</main>
    <Footer />
  </div>
);

export default PageShell;
