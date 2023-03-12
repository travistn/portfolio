import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const ProjectLink = ({ link, linkName }) => {
  const [linkType, setLinkType] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkHover = (e) => {
    if (e.currentTarget.id === 'Live Site') setLinkType('Live Site');
    if (e.currentTarget.id === 'Github') setLinkType('Github');
    setIsHovered(!isHovered);
  };

  return (
    <Link
      id={linkName}
      href={link}
      target='_blank'
      className='flex flex-row items-center gap-2'
      onMouseLeave={() => setIsHovered(!isHovered)}
      onMouseEnter={(e) => handleLinkHover(e)}>
      {linkName}
      <ArrowUpRightIcon
        className={`w-[19px] h-[19px] stroke-2 transition-transform duration-200 ease-in ${
          isHovered && linkType === linkName ? 'rotate-45' : ''
        }`}
      />
    </Link>
  );
};

export default ProjectLink;
