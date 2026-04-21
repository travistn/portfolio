'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import SkillCard from './SkillCard';

const SkillsCarousel = () => {
  const [skills, setSkills] = useState([]);
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, align: 'start' }, [
    autoplay.current,
  ]);

  useEffect(() => {
    let isMounted = true;

    const loadSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        const data = await response.json();

        if (isMounted) {
          setSkills(Array.isArray(data?.skills) ? data.skills : []);
        }
      } catch (error) {
        console.error('Failed to load skills.', error);

        if (isMounted) {
          setSkills([]);
        }
      }
    };

    loadSkills();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!emblaApi || skills.length === 0) {
      return;
    }

    emblaApi.reInit();
    autoplay.current.play();
  }, [emblaApi, skills.length]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='select-none mt-8 lg:w-[95%] lg:mx-auto'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex relative cursor-grab active:cursor-grabbing'>
          {skills?.map((skill, index) => (
            <div key={skill.name} className='min-w-0 flex-[0_0_140px]'>
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
      <ChevronLeftIcon
        className='hidden lg:flex absolute w-[25px] top-[60%] left-0 cursor-pointer dark:fill-white'
        onClick={scrollPrev}
      />
      <ChevronRightIcon
        className='hidden lg:flex absolute w-[25px] top-[60%] right-0 cursor-pointer dark:fill-white'
        onClick={scrollNext}
      />
    </div>
  );
};

export default SkillsCarousel;
