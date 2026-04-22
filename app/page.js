import Navbar from '@/components/Navbar';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import { getAbout, getProjects, getSkills } from '@/services';

export const revalidate = 60;

export default async function Home() {
  const [about, projects, skills] = await Promise.all([getAbout(), getProjects(), getSkills()]);

  return (
    <>
      <Navbar />
      <main>
        <About aboutMe={about?.[0] ?? null} skills={skills} />
        <Projects projects={projects} />
        <div className='dark:bg-[#f9f366]'>
          <Contact />
        </div>
      </main>
    </>
  );
}
