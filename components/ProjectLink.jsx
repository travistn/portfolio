import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const ProjectLink = ({ link, linkName }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='project-link flex flex-row items-center gap-2'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Link href={link} target='_blank' className='link' link-replace={linkName}>
        <span className='link-name'>{linkName}</span>
      </Link>
      <ArrowUpRightIcon
        className={`w-[19px] h-[19px] stroke-2 transition-transform duration-200 ease-in cursor-pointer ${
          isHovered ? 'lg:rotate-45' : ''
        }`}
      />
    </div>
  );
};

export default ProjectLink;
