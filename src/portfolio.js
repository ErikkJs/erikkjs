import emoji from "react-easy-emoji";

const greeting = {
  username: "Erik.js",
  title: "Hi im Erik!",
  subTitle: emoji(
    "A passionate software developer in all things javascript. Avid Learner, Teacher, And Student Of the Game."
  ),
  resumeLink: "https://drive.google.com/file/d/1FDYuKgsKOOmM3fm3x7BYEcTgS2VWJRI3/view?usp=sharing",
};

const socialMediaLinks = {
  github: "https://github.com/ErikkJs",
  linkedin: "https://www.linkedin.com/in/erik-soto-085ba6178/",
  medium: "https://medium.com/@officialeriksoto",
};


const skillsSection = {
  title: "Who Am I?",
  subTitle: "Just another software developer who tries to break down everything in life. Is that a chair? Who made it? What pieces were needed? How was it distributed? *comes back to reality at Starbucks.. Is life just just a javascript app running on a docker container hosted on the universe's cloud? I love to build apps, websites, and revolutionary ideas. Solving the worlds problems like the OG's before me!",
  skills: [
    emoji(
      "💻  Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("📲 Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "🛠 Integration of third party services such as AWS / Google Cloud"
    ),
  ],

  softwareSkills: [{
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};


const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "databyrd",
      companylogo: require("./assets/images/databyrd.svg"),
      date: "2019 – Present",
      desc: "My role here was to build out features from the backend all the way to the users eyes! ",
      descBullets: [
        "Tested programs and databases to identify issues and make necessary modifications",
        "Designed, implemented and monitored web pages and sites for continuous improvement",
        "Collaborated on all stages of systems development lifecycle, from requirement gathering to production releases",
        "Built, tested and deployed scalable, highly available and modular software products",
        "Collaborated with developers and performance engineers to enhance supportability and identify performance bottlenecks",
      ],
    },
    {
      role: "Junior Software Developer",
      company: "MMM",
      companylogo: require("./assets/images/MendezMediaMarketing.svg"),
      date: "Jan 2019 – Oct 2020",
      desc: "My role here consisted of improving and building out websites for various clients in unique markets!",
      descBullets: [
        "Maintained existing applications and designed and delivered new applications",
        "Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity",
        "Designed, implemented and monitored web pages and sites for continuous improvement",
        "Determined coding requirements for site creation, including e-commerce capability and specialized scripts",
        "Increased traffic using organic SEO techniques by an average of 30%",
        "Recommended changes to website architecture, content and linking to improve SEO positions for target keywords",
      ]
    },
    {
      role: "Student Lab Assistant ",
      company: "Cal State Bakersfield",
      companylogo: require("./assets/images/csub.jpg"),
      date: "Jan 2017 – Sep 2019",
      desc: "My Role here was my favorite to date! Was able to help students understand the concepts of Data Structures and Algorithms.",
      descBullets: [
        "Crafted effective learning plans to address students' coding weaknesses and strengths",
        "Created special handouts, study guides and assessments to evaluate and boost student knowledge",
        "Maintained excellent attendance record, consistently arriving to work on time",
        "Handed out labs and exams for intermediate computer science courses",
        "Student average grade rose an average of 6%"
      ]
    },
  ],
};

const bigProjects = {
  title: "Web Development",
  subtitle: "Websites I Helped Invision by Working With Their Frontend, Backend, or Both!",
  projects: [{
      image: require("./assets/images/51.png"),
      link: "https://51fiftyltm.com/",
      alt: "51 Fifty Logo"
    },
    {
      image: require("./assets/images/KM.png"),
      link: "https://kernmachinery.com/",
      alt: "Kern Machinery Logo"
    },
    {
      image: require("./assets/images/CarlosVieiraFoundationLogo.png"),
      link: "https://carlosvieirafoundation.org/",
      alt: "Carlos Vieira Foundation"
    },
    {
      image: require("./assets/images/KDD.png"),
      link: "https://www.kddmediacompany.com/",
      alt: "KDD"
    },
    {
      image: require("./assets/images/cosechaSana.jpg"),
      link: "https://www.cosechasana.org/",
      alt: "Cosecha Sana"
    },
    {
      image: require("./assets/images/MMM.png"),
      link: "https://www.mendezmediamarketing.com/",
      alt: "MMM"
    },
    {
      image: require("./assets/images/databyrd.png"),
      link: "https://www.databyrd.com/",
      alt: "databyrd"
    }
  ],
};


const achievementSection = {
  title: emoji("Some Achievements And Certificates 🏆 👨‍🎓 "),
  subtitle: "From Hackathon W's to Industry Course Work!",

  achivementsCards: [{
      title: "2016 CSUB Electric Bookworm Hackathon",
      alt:"CSUB logo",
      subtitle: "Won first place by developing a prototype app to allow students to reserve a room at CSUB.",
      image: require("./assets/images/csub.png"),
      footerLink: [
      ],
    },
    {
      title: "Google Cloud Platform Fundamentals: Core Infrastructure",
      subtitle: "A certificate earned through coursera as part of the Google Student Inovator Program!",
      image: require("./assets/images/googleCloud.png"),
      alt:"google cloud logo",
      footerLink: [{
        name: "View Credential",
        url: "https://www.coursera.org/account/accomplishments/verify/SJH29NSEL9HH",
      }, ],
    },

    {
      title: "The Web Developer Bootcamp",
      subtitle: "A fun and interactive udemy course to refresh, refine, and prove my web dev skills!",
      alt:"Udemy Logo",
      image: require("./assets/images/udemy.png"),
      footerLink: [{
          name: "View Credential",
          url: "https://www.udemy.com/certificate/UC-S2KBB6QM/"
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sometimes we run into some really tough problems. Ive written a solution or two!",

  blogs: [{
      url: "https://medium.com/@officialeriksoto/running-puppeteer-on-an-aws-elastic-beanstalk-instance-using-nodejs-ae423841b57a",
      title: "Running Puppeteer On An AWS Elastic Beanstalk Instance Using NodeJS",
      description: "Find out how to acommplish this overly complicated task! Google Cloud is a better place to do this, but we are stubborn so we will get it to work on AWS.",
    },

  ],
};



const contactInfo = {
  title: emoji("Contact Me 📲"),
  subtitle: "Looking To Start A Web Presence Or Do You Have An Exciting Project For Me? ",
  email_address: "erik@databyrd.com",
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