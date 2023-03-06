import Navbar from '@/components/Navbar';
import About from '@/sections/About';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center px-6 mx-auto lg:w-[60%]'>
        <About />
      </main>
    </>
  );
}
