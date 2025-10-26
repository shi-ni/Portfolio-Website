import profileImage from '../assets/Profile-Picture.png';

export const portfolioData = {
  name: 'Hasan Zubair',
  image: profileImage,
  title: 'Full-Stack Developer & CS Student',
  summary:
    'Computer Science student at FAST NUCES mastering full-stack development through hands-on projects. Building personal projects like an E-commerce website to strengthen React skills. Combines technical learning with freelance experience in video editing.',
  contact: {
    email: 'hasabzubair@gmail.com',
    phone: '+92 326 0663454',
    location: 'Faisalabad, Pakistan',
    github: 'https://github.com/shi-ni',
    linkedin: 'https://www.linkedin.com/in/hasan-zubair-31b228361/',
  },
  projects: [
    {
      title: 'Full-Stack E-Commerce Store',
      description:
        'A complete e-commerce platform developed as part of university coursework.',
      tags: ['React', 'Node.js', 'Express', 'MySQL'],
      link: 'https://github.com/shi-ni/React-Ecommerce-Store',
    },
    {
      title: 'OS Process Scheduler Simulator',
      description: 'A simulation of various CPU scheduling algorithms.',
      tags: ['React', 'Algorithms'],
      link: 'https://github.com/shi-ni/Os-Simulation-using-gtk-in-C',
    },
    {
      title: 'Mini Instagram (Data Structures)',
      description:
        'A social media concept implementing fundamental data structures.',
      tags: ['Data Structures', 'Java/C++'],
      link: 'https://github.com/shi-ni/Data-Structure-Project---Mini-Instagram',
    },
    {
      title: 'Social Media App',
      description:
        'A simple social media application built during the 2nd semester.',
      tags: ['React', 'Firebase'],
      link: 'https://github.com/shi-ni/Social-Media-App---OOP',
    },
    {
      title: 'Pac-Man Game',
      description:
        'A clone of the classic Pac-Man game, built in the 1st semester.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/shi-ni/PacMan---Game',
    },
    {
      title: 'Spotify Clone',
      description:
        'A personal project replicating core features of the Spotify web player.',
      tags: ['React', 'Spotify API'],
      link: 'https://github.com/shi-ni/Spotify-Clone',
    },
    {
      title: 'Notes App',
      description: 'A simple note-taking application for personal use.',
      tags: ['React', 'Local Storage'],
      link: 'https://github.com/shi-ni/Notes-app',
    },
  ],
  experience: [
    {
      title: 'Freelance Video Editor',
      company: 'Fiverr',
      duration: 'Mar 2020 - Dec 2022',
      description:
        'Delivered 15+ orders with 100% client satisfaction, specializing in promotional videos and social media content.',
    },
  ],
  education: {
    institution: 'FAST NUCES',
    location: 'Faisalabad, Pakistan',
    degree: 'Bachelors in Computer Science',
    duration: 'Expected Graduation: 2027',
    courses: ['Data Structures', 'Algorithms', 'Calculus', 'Database Systems'],
  },
  skills: {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'MySQL'],
    languages: ['English (Fluent)', 'Urdu (Native)'],
  },
};
