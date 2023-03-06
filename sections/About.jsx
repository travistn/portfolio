const About = () => {
  return (
    <section className='flex flex-col items-center gap-6 py-16 lg:py-[6rem]'>
      <h1 className='text-blue-500 uppercase font-bold lg:text-[20px] dark:text-blue-400'>
        Travis Nguyen
      </h1>
      <h2 className='font-extrabold text-[44px] text-center leading-[50px] lg:text-[60px] lg:leading-[90px] dark:text-white'>
        Frontend Developer
      </h2>
      <p className='text-[14px] leading-[28px] px-2 text-center lg:text-[16px] lg:px-0 dark:text-white dark:opacity-80'>
        Hi there, I’m Travis! Being a web developer, I am passionate in creating new experiences,
        implementing eye catching designs, and making websites come to life.
      </p>
    </section>
  );
};

export default About;
