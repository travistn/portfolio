import ProjectContainer from '@/components/ProjectContainer';
import { projects } from '@/constants';

const Projects = () => {
  return (
    <section className='flex flex-col gap-6 px-6 pb-8 lg:mx-auto lg:w-[90%] xl:w-[75%] 2xl:w-[60%]'>
      <h3 className='font-bold text-[30px] tracking-[-1px] lg:text-[40px] dark:text-white'>
        Featured Projects
      </h3>
      <div className='mt-8'>
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;