'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import SkillCard from './SkillCard';
import skills from '../data.json';
import { useCallback } from 'react';

const SkillsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='lg:w-[95%] lg:mx-auto select-none'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex relative cursor-grab active:cursor-grabbing'>
          {skills.map((skill, index) => (
            <div key={skill.name} className='min-w-0 flex-[0_0_140px]'>
              <SkillCard key={skill.name} skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
      <ChevronLeftIcon
        className='hidden lg:flex absolute w-[25px] top-[42%] left-0 cursor-pointer dark:fill-white'
        onClick={scrollPrev}
      />
      <ChevronRightIcon
        className='hidden lg:flex absolute w-[25px] top-[42%] right-0 cursor-pointer dark:fill-white'
        onClick={scrollNext}
      />
    </div>
  );
};

export default SkillsCarousel;
