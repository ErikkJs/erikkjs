const greeting = {
  username: 'Erik.js',
  title: 'Hi im Erik!',
  subTitle:
    'A passionate software developer in all things tech. Specializing in web development and cloud computing.',
  resumeLink:
    'https://drive.google.com/file/d/1lRvuxMmmxP5Q-UPkdYA-KFeovSfMJwBW/view?usp=drive_link',
};

const socialMediaLinks = {
  github: 'https://github.com/ErikkJs',
  linkedin: 'https://www.linkedin.com/in/erik-soto-085ba6178/',
  medium: 'https://medium.com/@officialeriksoto',
};

const skillsSection = {
  title: 'Experiences',
  subTitle:
    " I've done remote work for agencies, and collaborated with talented engineers to create web applications for both business and consumer use. I'm quietly confident and always adding new tools to my tool box.",
  skills: [
    '💻  Develop highly interactive Front end / User Interfaces for your web and mobile applications',
    '📲 Progressive Web Applications ( PWA ) in normal and SPA Stacks',
    '🛠 Integration of third party services such as AWS / Google Cloud',
    '📈 SEO optimization and performance improvements',
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer',
      company: 'Sharp HealthCare',
      companylogo: require('./assets/images/sharp-logo.jpeg'),
      date: '2020 – Present',
      desc: 'My role here is to build out features from AWS hosted apis, to frontend applications using React, and Remix! ',
      descBullets: [
        'Worked on a team to build out a new patient portal for Sharp HealthCare',
        'CDK for AWS infrastructure',
        'API Gateway, Lambda, DynamoDB, S3, Cognito, and more!',
        'Help create the component library for use across the company',
        'Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases',
        'Built, tested and deployed scalable, highly available and modular software products',
        'Collaborated with developers and performance engineers to enhance supportability and identify performance bottlenecks',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'databyrd',
      companylogo: require('./assets/images/databyrd.svg'),
      date: '2019 – 2020',
      desc: 'My role here was to build out features from the backend all the way to the users eyes! ',
      descBullets: [
        'Tested programs and databases to identify issues and make necessary modifications',
        'Designed, implemented and monitored web pages and sites for continuous improvement',
        'Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases',
        'Built, tested and deployed scalable, highly available and modular software products',
        'Collaborated with developers and performance engineers to enhance supportability and identify performance bottlenecks',
      ],
    },
    {
      role: 'Junior Software Developer',
      company: 'MMM',
      companylogo: require('./assets/images/MendezMediaMarketing.svg'),
      date: 'Jan 2019 – Oct 2020',
      desc: 'My role here consisted of improving and building out websites for various clients in unique markets!',
      descBullets: [
        'Maintained existing applications and designed and delivered new applications',
        'Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity',
        'Designed, implemented and monitored web pages and sites for continuous improvement',
        'Determined coding requirements for site creation, including e-commerce capability and specialized scripts',
        'Increased traffic using organic SEO techniques by an average of 30%',
        'Recommended changes to website architecture, content and linking to improve SEO positions for target keywords',
      ],
    },
    {
      role: 'Student Lab Assistant ',
      company: 'Cal State Bakersfield',
      companylogo: require('./assets/images/csub.jpg'),
      date: 'Jan 2017 – Sep 2019',
      desc: 'My Role here was my favorite to date! Was able to help students understand the concepts of Data Structures and Algorithms.',
      descBullets: [
        "Crafted effective learning plans to address students' coding weaknesses and strengths",
        'Created special handouts, study guides and assessments to evaluate and boost student knowledge',
        'Maintained excellent attendance record, consistently arriving to work on time',
        'Handed out labs and exams for intermediate computer science courses',
        'Student average grade rose an average of 6%',
      ],
    },
  ],
};

const bigProjects = {
  title: 'Web Development',
  subtitle: "I'm proud to have collaborated with some awesome companies",
  projects: [
    {
      image: require('./assets/images/51.png'),
      link: 'https://51fiftyltm.com/',
      alt: '51 Fifty Logo',
    },
    {
      image: require('./assets/images/KM.png'),
      link: 'https://kernmachinery.com/',
      alt: 'Kern Machinery Logo',
    },
    {
      image: require('./assets/images/CarlosVieiraFoundationLogo.png'),
      link: 'https://carlosvieirafoundation.org/',
      alt: 'Carlos Vieira Foundation',
    },
    {
      image: require('./assets/images/KDD.png'),
      link: 'https://www.kddmediacompany.com/',
      alt: 'KDD',
    },
    {
      image: require('./assets/images/cosechaSana.jpg'),
      link: 'https://www.cosechasana.org/',
      alt: 'Cosecha Sana',
    },
    {
      image: require('./assets/images/databyrd.png'),
      link: 'https://www.databyrd.com/',
      alt: 'databyrd',
    },
    {
      image: require('./assets/images/MMM.png'),
      link: 'https://www.mendezmediamarketing.com/',
      alt: 'MMM',
    },
  ],
};

const achievementSection = {
  title: 'Achievements🏆 👨‍🎓 ',
  subtitle: '',

  achivementsCards: [
    {
      title: '2016 CSUB Electric Bookworm Hackathon',
      alt: 'CSUB logo',
      subtitle:
        'Won first place by developing a prototype app to allow students to reserve a room at CSUB.',
      image: require('./assets/images/csub.png'),
      footerLink: [],
    },
    {
      title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
      subtitle:
        'A certificate earned through coursera as part of the Google Student Inovator Program!',
      image: require('./assets/images/googleCloud.png'),
      alt: 'google cloud logo',
      footerLink: [
        {
          name: 'View Credential',
          url: 'https://www.coursera.org/account/accomplishments/verify/SJH29NSEL9HH',
        },
      ],
    },

    {
      title: 'The Web Developer Bootcamp',
      subtitle:
        'A fun and interactive udemy course to refresh, refine, and prove my web dev skills!',
      alt: 'Udemy Logo',
      image: require('./assets/images/udemy.png'),
      footerLink: [
        {
          name: 'View Credential',
          url: 'https://www.udemy.com/certificate/UC-S2KBB6QM/',
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle: '',

  blogs: [
    {
      url: 'https://medium.com/@officialeriksoto/running-puppeteer-on-an-aws-elastic-beanstalk-instance-using-nodejs-ae423841b57a',
      title: 'Running Puppeteer On An AWS Elastic Beanstalk Instance Using NodeJS',
      description:
        'Find out how to acommplish this overly complicated task! Google Cloud is a better place to do this, but we are stubborn so we will get it to work on AWS.',
    },
  ],
};

const contactInfo = {
  title: 'Contact Me 📲',
  subtitle: 'Looking To Start A Web Presence Or Do You Have An Exciting Project For Me? ',
  email_address: 'officialeriksoto@gmail.com',
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
};
