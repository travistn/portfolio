'use client';

import useEmblaCarousel from 'embla-carousel-react';

import SkillCard from './SkillCard';
import skills from '../data.json';

const SkillsCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true });

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex cursor-grab active:cursor-grabbing'>
        {skills.map((skill, index) => (
          <div key={skill.name} className='min-w-0 flex-[0_0_140px]'>
            <SkillCard key={skill.name} skill={skill} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
