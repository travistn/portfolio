export const navTransition = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 1,
    },
  },
};

export const staggerContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const dropUpVariants = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

export const projectsTransition = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};
