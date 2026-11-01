import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';


const NotFound = () => (
  <PageShell>
    <div className='mx-auto max-w-md px-6 pb-24 text-center'>
      <p className='f-display text-6xl text-[#C6F135]'>404</p>
      <h1 className='f-display mt-4 text-2xl'>PAGE NOT FOUND</h1>
      <p className='f-body mt-3 text-white/50'>
        The page you’re looking for doesn’t exist or has moved.
      </p>

      <Link
        to='/'
        className='f-display mt-8 inline-block rounded-md bg-[#C6F135] px-8 py-3 text-sm tracking-wide text-black transition-colors hover:bg-[#d5fb5a]'
      >
        BACK TO HOME
      </Link>
    </div>
  </PageShell>
);

export default NotFound;
