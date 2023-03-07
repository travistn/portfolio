const SkillCard = ({ skill, index }) => {
  return (
    <div className='w-[110px] h-[110px] flex flex-col gap-2 justify-center items-center border-dotted border-[1px] border-[#777777] relative select-none dark:border-[#b1b1b1]'>
      <img src={skill.icon} alt={skill.name} className='h-[55px] w-[55px]' />
      <p className='text-[12px] uppercase dark:text-white'>{skill.name}</p>
      <p className='absolute text-[11px] dark:text-white bottom-0 right-0 pr-1'>{index + 1}</p>
    </div>
  );
};

export default SkillCard;
