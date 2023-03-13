import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <div className='dark:bg-[#f9f366]'>
          <Contact />
        </div>
      </main>
    </>
  );
}
