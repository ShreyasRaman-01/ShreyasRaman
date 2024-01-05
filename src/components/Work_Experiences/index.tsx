import styles from "./index.module.css";
import WorkExpBox, { Filters } from "./Work_Exp_Box";

interface WorkExperience{
  icon_path: string;
  alt_name:string;
  position_and_dates: string;
  name: string;
  bulletpoints: Array<string>;
  language: Array<Filters>;
}


const FILTERS: Array<Filters> = [
  {
    id: 0,
    name: "Python",
    color: "#6BB243",
  },
  {
    id: 1,
    name: "Perl",
    color: "#F76906",
  },

  {
    id: 2, 
    name: "JavaScript",
    color: "#D73ADE",
  },
  {
    id: 3, 
    name: "Solidity",
    color: "#3D95CB",
  },
  {
    id: 4,
    name: "C",
    color: "#003970",
  },
  {
    id: 5,
    name: "SQLite",
    color: "#9619C9",
  },
  {
    id: 6,
    name: "Reviewer",
    color: "#D53633",
  },
  {
    id: 7,
    name: "HTML/CSS",
    color: "#d10d0d",
  },
  {
    id: 8,
    name: "Consulting",
    color: "#003970",
  },
  {
    id: 9,
    name: "Robotics",
    color: "#9619C9",
  }

];


const WORK_EXPERIENCE_DETAILS:  Array<WorkExperience> = [
  {
    icon_path: "media/mck_icon.jpeg",
    alt_name: "McKinsey & Co",
    position_and_dates: "Business Analyst Intern [Winter 2023/2024]",
    name: "McKinsey & Co.",
    bulletpoints: ["Interned as a Business Analyst at McKinsey & Co. Dubai office"],
    language: [FILTERS[8]]
  },
  {
    icon_path: "media/icra2024_icon.png",
    alt_name: "ICRA 2024",
    position_and_dates: "Reviewer [Fall 2023]",
    name: "ICRA 2024",
    bulletpoints: ["Requested to review multiple papers for ICRA 2024", "Peformed a literature review and provided thorough feedback + points-of-improvement to authors"],
    language: [FILTERS[6], FILTERS[9]]
  },
  {
    icon_path: "media/brown_icon.png",
    alt_name: "CS1410 HTA",
    position_and_dates: "Head Teaching Assistant [Fall 2022]",
    name: "Artificial Intelligence Course, CS1410",
    bulletpoints: ["Working with Prof. George Konidaris to improve course content to improve course content and automate assigment grading + logistics", "Supporting 120+ students overall, leading 20+ TA staff and mentoring 10+ students on final projects"],
    language: [FILTERS[0], FILTERS[1]]
  },
  {
    icon_path: "media/wisdomise_icon.jpeg",
    alt_name: "Wisdomise",
    position_and_dates: "Machine Learning Engineer [Summer 2022]",
    name: "Wisdomise",
    bulletpoints: ["Optimizing Liquidity Provision on UniswapV3 using ML techiniques", "Predicted high and low tick bounds with accuracy of >95% and utility of >98%"],
    language: [FILTERS[0], FILTERS[3], FILTERS[2], FILTERS[7], FILTERS[5]]
  },
  {
    icon_path: "media/rario_icon.jpeg",
    alt_name: "Rario",
    position_and_dates: "Blockchain Developer [Summer 2022]",
    name: "Rario",
    bulletpoints: ["Develop a P2P (web-3) Messaging Platform for chat and NFT exchanges", "Used smart contracts to manage platform backend and deployed on Polygon (Mumbai) mainnet"],
    language: [FILTERS[3], FILTERS[2], FILTERS[7]]
  },
  {
    icon_path: "media/brown_icon.png",
    alt_name: "DATA1030 TA",
    position_and_dates: "Teaching Assistant [Fall 2020]",
    name: "Hands-on Data Science, DATA1030 (Graduate Level)",
    bulletpoints: ["Worked under Prof. Andras Zsom to support 50+ students with virtual TA hours and grading", "Mentored 14 graduate students on using ML and data science techniques for final projects"],
    language: [FILTERS[0]]
  }
  
  
]




const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.projectsTitle}>Work Experience</h2>

    {Array.from(WORK_EXPERIENCE_DETAILS.keys()).map((val, index) => (
      <WorkExpBox key={index} filters={WORK_EXPERIENCE_DETAILS[val].language} icon={WORK_EXPERIENCE_DETAILS[val].icon_path} alt_icon_name = {WORK_EXPERIENCE_DETAILS[val].alt_name} position_and_dates = {WORK_EXPERIENCE_DETAILS[val].position_and_dates} name = {WORK_EXPERIENCE_DETAILS[val].name} description = {WORK_EXPERIENCE_DETAILS[val].bulletpoints}/>
    ))}


  </div>
);

export default Projects;
