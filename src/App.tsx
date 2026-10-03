import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import Solution from './components/Solution'
import Features from './components/Features'
// import HowItWorks from './components/HowItWorks'
import Statistics from './components/Statistics'
import Subjects from './components/Subjects'
// import Screenshots from './components/Screenshots'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar/>
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      {/* <HowItWorks /> */}
      <Statistics />
      <Subjects />
      {/* <Screenshots /> */}
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
