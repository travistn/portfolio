import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Projects from '@/sections/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
