/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sumanth's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end product development. Expertise in building Blockchain based mobile and web applications with key focus on security, performance, scalability and optimization of resources.  ",
  og: {
    title: "Sumanth Kumar Portfolio",
    type: "website",
    url: "http://Sumanth.app/",
  },
};

//Home Page
const greeting = {
  title: "Sumanth Kumar",
  logo_name: "Sumanth",
  subTitle:
    "A passionate individual who always thrives to work on end to end product development. Expertise in building Blockchain based mobile and web applications with key focus on security, performance, scalability and optimization of resources.",
  resumeLink:
    "",
  portfolio_repository: "http://Sumanth.app/",
  githubProfile: "https://github.com/isumanthkumar",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/isumanthkumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sumanth-kumar-8b3166197/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  }
];

const skills = {
  data: [
    {
      title: "Blockchain & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos-ethereum",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        }
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        }
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Essex",
      subtitle: "MSc. in Artificial Intelligence",
      logo_path: "essex_logo.png",
      alt_name: "Essex University",
      duration: "January 2022",
      descriptions: [
        "⚡ This course gave me an oppurtuinity to aquire AI relevant skills like Machine learning, Data mining, Decision making, Big data.",
        "⚡ In depth understanding of the specifics and the intricacies of AI methodologies",
        "⚡ Explored ways of linking artificial intelligence to real-world applications in a range of fields and industries ",
      ],
      website_link: "https://www.essex.ac.uk/",
    },
    {
      title: "Jawaharlal Nehru Technological University",
      subtitle: "Bachelor's In Electronics and communications engineering",
      logo_path: "jntuk_logo.png",
      alt_name: "JNTUK",
      duration: "",
      descriptions: [
        "The electronics and communication engineering (ECE) as a synergy of electronics, signal processing, computing, and data transmission."
      ],
      website_link: "https://www.jntuk.edu.in/",
    }
  ],
};

const certifications = {
  certifications: [
   
  ],
};

// Experience Page
const experience = {
  title: "",
  subtitle: " ",
  description:
    "I worked for Harman International as Lead developer building products for our customers by using advanced audio Technologies. Ever since I was introduced to Bitcoin I am fascinated towards the technology (BlockChain) behind it and then i started working on designing the solutions that involve core blockchain technologies. \n Competencies: BlockChain Developer, Full stack Developer with React and Node Js Framework,  Hyperledger Fabric, Ethereum, Smart contracts, Docker, Container orchestration, Devops, Golang, Solidity, java, kotlin, Kubernetes, Android App development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Lead Developer",
          company: "Harman International",
          company_url: "https://www.harman.com/",
          logo_path: "harman_logo.svg",
          duration: "November 2016 – January 2022",
          location: "Bangalore, Karnataka",
          description:
            "Involved in the design, development and architecture of blockchain based web applications, mobile applications. End to end development including writing smart contracts, deploying and integrating with client services using NodeJS restful API",
          color: "#0879bf",
        },
        {
          title: "Android Application Developer",
          company: "Snowtint Technologies",
          company_url: "https://www.snowtint.com//",
          logo_path: "snowting.jpeg",
          duration: "October 2014 – November 2016",
          location: "Bangalore, Karnataka",
          description:
            "Owned the full software development lifecycle - problem definition, design, development.Accountable for mobile application development, from features prioritization to design to release. I have Designed, developed and published multiple mobile applications.",
          color: "#9b1578",
        },
        {
          title: "SDE I",
          company: "Maxheap Technologies (Commonfloor.com)",
          company_url: "https://www.commonfloor.com/",
          logo_path: "commonfloor.png",
          duration: "June 2014 – October 2014",
          location: "Bangalore, Karnataka",
          description:
            "Worked on Common floor property search android application design and development.",
          color: "#fc1f20",
        },
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Sumanth.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://Sumanthhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
