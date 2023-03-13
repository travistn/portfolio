import { contacts } from '@/constants';

const Contact = () => {
  return (
    <section className='flex flex-col gap-8 px-6 py-16 lg:mx-auto lg:pt-[6rem] lg:w-[90%] xl:w-[75%] 2xl:w-[65%]'>
      <h3 className='font-bold text-[30px] tracking-[-1px] lg:text-[40px]'>Contact</h3>
      <p className='font-medium lg:text-[18px] lg:pr-[10rem] xl:pr-[15rem] 2xl:pr-[20rem]'>
        I am currently looking for an opportunity. If you have a question or want to chat, please
        feel free to send a message through one of the links and I will get back to you!
      </p>
      <div className='flex flex-row gap-4 lg:gap-6'>
        {contacts.map((contact) => (
          <a href={contact.link} target='_blank'>
            <img
              src={contact.icon}
              alt={`${contact.name} icon`}
              className='w-[40px] h-[40px] transition-transform duration-200 ease-in lg:w-[40px] lg:h-[40px] lg:hover:scale-110'
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
