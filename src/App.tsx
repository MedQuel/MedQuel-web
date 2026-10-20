import Navbar from './components/Navbar';
import Footer from './components/Footer';

import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Solution from './components/Solution';
import Features from './components/Features';
import Subjects from './components/Subjects';
import Statistics from './components/Statistics';
import ProblemStatement from './components/ProblemStatement';


export default function App() {
  return (
    <div className='gradient-bg min-h-screen'>
      <Navbar />

      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <Statistics />
      <Subjects />
      <Pricing />
      <FAQ />

      <Footer />
    </div>
  );
}
