import { useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { env } from '../config/env';
import PageShell from '../components/PageShell';


const AppFallback = () => {
  const { pathname, search } = useLocation();
  const appPath = pathname.replace(/^\/app\/?/, '');

  useEffect(() => {
    document.title = 'Open MedQuel';
  }, []);

  return (
    <PageShell>
      <div className='mx-auto max-w-md px-6 pb-24 text-center'>
        <Smartphone className='mx-auto h-12 w-12 text-[#C6F135]' />

        <h1 className='f-display mt-6 text-2xl'>OPEN IN THE MEDQUEL APP</h1>
        <p className='f-body mt-3 text-white/50'>
          This link is meant for the MedQuel Android app.
        </p>

        <a
          href={`${env.appScheme}://${appPath}${search}`}
          className='f-display mt-8 block rounded-md bg-[#C6F135] py-4 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
        >
          OPEN MEDQUEL
        </a>
        <a
          href={env.playStoreUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='f-body mt-4 block rounded-md border border-white/20 py-3 text-sm font-medium transition-colors hover:border-[#C6F135]'
        >
          Get it on Google Play
        </a>
      </div>
    </PageShell>
  );
};

export default AppFallback;
