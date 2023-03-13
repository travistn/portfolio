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
    <div
      id={linkName}
      className='flex flex-row items-center gap-2'
      onMouseEnter={(e) => handleLinkHover(e)}
      onMouseLeave={() => setIsHovered(!isHovered)}>
      <Link href={link} target='_blank' className='link' link-replace={linkName}>
        <span className='link-name'>{linkName}</span>
      </Link>
      <ArrowUpRightIcon
        className={`w-[19px] h-[19px] stroke-2 transition-transform duration-200 ease-in cursor-pointer ${
          isHovered && linkType === linkName ? 'lg:rotate-45' : ''
        }`}
      />
    </div>
  );
};

export default ProjectLink;
