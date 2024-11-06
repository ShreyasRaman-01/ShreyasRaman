import styles from "./index.module.css";
import ResearchBox from "./ResearchBox";
import { Filters, LinkFilters } from "./ResearchBox";

interface ResearchDetails{
  icon_path: string;
  alt_name:string;
  name: string;
  catchphrase: string;
  // bulletpoints: Array<string>;
  github_link: string;
  submission_links: Array<LinkFilters>;
  topics_and_libraries: Array<Filters>;
}

const TOPICS_LIBRARIES: Array<Filters> = [
  {
    id: 0,
    name: "NumPy",
    color: "#E6EAEA",
  },
  {
    id: 1,
    name:"CV2",
    color:"#E6EAEA",
  },
  {
    id: 2,
    name: "TensorFlow",
    color: "#E6EAEA",
  },
  {
    id: 3,
    name: "Robotics",
    color: "#E6EAEA",
  },
  {
    id: 4,
    name: "Boston Dynamics (SPOT)",
    color: "#E6EAEA",
  },
  {
    id: 5,
    name: "Selenium",
    color: "#E6EAEA",
  },
  {
    id: 6,
    name: "requests",
    color: "#E6EAEA",
  },
  {
    id: 7,
    name:"Pandas",
    color: "#E6EAEA",
  },
  {
    id: 8,
    name:"PyGame",
    color: "#E6EAEA",
  },
  {
    id: 9,
    name: "sqlite3",
    color:"#E6EAEA",
  },
  {
    id: 10,
    name: "matplotlib",
    color:"#E6EAEA"
  },
  {
    id: 11,
    name:"Reinforcement Learning",
    color:"#E6EAEA"
  },
  {
    id: 12,
    name:"Computer Vision",
    color:"#E6EAEA"
  },
  { 
    id: 13,
    name:"Visual Language Models (VLMs)",
    color:"#E6EAEA"
  },
  {
    id: 14,
    name:"CLIP",
    color:"#E6EAEA"
  },
  {
    id: 15,
    name: "JSON",
    color: "#E6EAEA",
  },
  {

    id: 16,
    name: "CLIPSeg",
    color:"#E6EAEA",
  },
  {
    id: 17,
    name: "ROS",
    color:"#E6EAEA",
  },
  {
    id: 18,
    name: "Large Language Models (LLMs)",
    color:"#E6EAEA",
  },
  {
    id: 19,
    name:"COCO Dataset",
    color:"#E6EAEA",
  },
  {
    id: 20,
    name:"MaskRCNN",
    color:"#E6EAEA",
  },
  {
    id: 21,
    name: "Virtual Home",
    color: "#E6EAEA"
  },
  {
    id: 22,
    name: "LTL",
    color: "#E6EAEA",
  },
  {
    id: 23,
    name: "Dreamer V2",
    color: "#E6EAEA",
  },
  {

    id: 24,
    name: "PyTorch",
    color: "#E6EAEA",
  },
  {
    id: 25,
    name: "OpenAI: MiniGrid",
    color:"#E6EAEA"
  },
  {
    id: 26,
    name: "OpenAI: GPT-3",
    color:"#E6EAEA"
  },
  {
    id: 27,
    name: "Time-Series Data",
    color:"#E6EAEA"
  },
  {
    id: 28,
    name: "CNNs",
    color:"#E6EAEA"
  },
  {
    id: 29,
    name: "HTNs",
    color:"#E6EAEA"
  },
  {
    id: 30,
    name: "Planning",
    color:"#E6EAEA"
  },
  {
    id: 31,
    name: "CLIPCap",
    color:"#E6EAEA"
  },
  {
    id: 32,
    name: "SayCan (Baseline)",
    color:"#E6EAEA"

  },
  {
    id: 33,
    name: "OpenAI: GPT4",
    color:"#E6EAEA"

  },
  {
    id: 34,
    name: "Google: Gemini",
    color:"#E6EAEA"

  },
  {
    id: 35,
    name: "LaVa",
    color:"#E6EAEA"

  },
  {
    id: 36,
    name: "InstructBlip",
    color:"#E6EAEA"

  },
  {
    id: 37,
    name: "AI2Thor",
    color:"#E6EAEA"

  },
   {
    id: 38,
    name: "Google: RT1",
    color:"#E6EAEA"

  },
   {
    id: 39,
    name: "ALFRED",
    color:"#E6EAEA"

  },
  {
    id: 31,
    name: "Contrastive Learning",
    color: "#E6EAEA"
  }



];

const SUBMISSIONS: Array<LinkFilters> = [
  {
    id: 0,
    name: "ArXiv",
    color: "#8D70FF",
    link: null,
  },
  {
    id: 1,
    name: "RLC 2024",
    color: "#A166FF",
    link: null,
  },

  {
    id: 2,
    name: "ICRA 2024",
    color: "#E949B9",
    link: null,
  },
  {
    id: 3,
    name: "LangRob @ CoRL 2023",
    color: "#8599FF",
    link: null,
  },
  {
    id: 4,
    name: "FMDM @ NeurIPS 2022",
    color: "#7D7AFF",
    link: null,
  },
  {
    id: 5,
    name: "CV4Smalls @ WACV 2024",
    color: "#FF81F0",
    link: null,
  },
  {
    id: 6,
    name: "Animal Behavior",
    color: "#D452FF",
    link: null,
  },
  {
    id: 7,
    name: "RSS 2024",
    color: "#7D7AFF",
    link: null,
  },
  {
    id: 8,
    name: "Brown University Archive",
    // color: "#581845",
    color: "#B77195",
    link: null,
  },
  {
    id: 9, 
    name: "ICLR 2024",
    color: "#FF81F0",
    link: null,
  },
  {
    id: 10,
    name: "IROS 2024",
    color: "#03A6F7",
    link: null,
  },
  {
    id: 11,
    name: "Website",
    color: "#BDC4FF",
    link: null,
  },
  {
    id: 12,
    name: "RLC 2024",
    color: "#A166FF",
    link: null,
  },
  {
    id: 13,
    name: "ICLR 2025",
    color: "#E949B9",
    link: null,
  },
  {
    id: 14,
    name: "LangRob @ CoRL 2024",
    color: "#8599FF",
    link: null,
  },
  {
    id: 15,
    name: "RSS 2025",
    color: "#E949B9",
    link: null,
  },
  {
    id: 16,
    name: "ICML 2025",
    color: "#FF81F0",
    link: null,
  },
  {
    id: 17,
    name: "LEAP @ CoRL 2024",
    color: "#8599FF",
    link: null,
  },
  {
    id: 18,
    name: "ASPIRE HSEF 2024",
    color: "#D452FF",
    link: null,
  }

];

function updateLink( submissionData: LinkFilters,  linkData: string){

  submissionData.link = linkData;
  return submissionData;

}

function deepCopy<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }

  // Create a new object with the same structure
  const copy: any = Array.isArray(obj) ? [] : {};

  // Recursively copy each property
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = deepCopy(obj[key]);
      }
  }

  return copy;
}

const RESEARCH_DETAILS:  Array<ResearchDetails> = [
   {
    icon_path: "media/skill_wrapper.png",
    alt_name: "Skill Wrapper",
    name: "Skill Wrapper: Skill Abstraction Using Foundation Models",
    catchphrase: "Co-First Author | LEAP @ CoRL 2024, prepared for RSS 2025",
    github_link: "https://github.com",
    submission_links: [SUBMISSIONS[17], SUBMISSIONS[15]],
    topics_and_libraries: [TOPICS_LIBRARIES[3], TOPICS_LIBRARIES[4], TOPICS_LIBRARIES[13], TOPICS_LIBRARIES[14],TOPICS_LIBRARIES[33],TOPICS_LIBRARIES[34],TOPICS_LIBRARIES[35],TOPICS_LIBRARIES[36], TOPICS_LIBRARIES[37], TOPICS_LIBRARIES[31]]
  },
  {
    icon_path: "media/disentangled_rep_icon.png",
    alt_name:"Disentangled Representations",
    name: "Learning Disentangled Representations for RL using Self-Supervised Learning",
    catchphrase: "Co-Author | prepared for ICML 2025 ",
    //bulletpoints: [ ],
    github_link: "https://www.github.com",
    submission_links:[SUBMISSIONS[0],SUBMISSIONS[16]],
    topics_and_libraries:[TOPICS_LIBRARIES[24], TOPICS_LIBRARIES[11], TOPICS_LIBRARIES[23], TOPICS_LIBRARIES[31]]
  },
  {
    icon_path: "media/lanmp.png",
    alt_name: "LaNMP Dataset",
    name: "LaNMP: A Language-Conditioned Mobile Manipulation Benchmark for Autonomous Robots",
    catchphrase: "Co-Author | LangRob @ CoRL 2024, prepared for RAL 2024",
    github_link: "https://github.com/h2r/LaNPM-Dataset",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[11]), 'https://lanmpdataset.github.io/'), SUBMISSIONS[14]],
    topics_and_libraries: [TOPICS_LIBRARIES[3], TOPICS_LIBRARIES[4], TOPICS_LIBRARIES[13], TOPICS_LIBRARIES[14], TOPICS_LIBRARIES[37],TOPICS_LIBRARIES[38], TOPICS_LIBRARIES[39]]
  },
  {
    icon_path: "media/dog_icon.png",
    alt_name:"Dog Vision",
    name: "Categorizing the Visual Environment and Analyzing the Visual Attention of Dogs",
    catchphrase: "Co-Author | Karen T. Romer Undergraduate Teaching and Research Award | CV4Smalls @ WACV 2024 (First Author) & Animal Behavior (Co-Author)",
    //bulletpoints: ['Led the Computer Vision branch of the project with the objective to track dog eye-fixations and correlate visual behavioral patterns of dogs','Sourced data sets of 35k+ images spanning 250k+ instances across 45 different classes and created a custom Mask-RCNN pipeline for transfer learning (across multiple GPUs)'],
    github_link: "https://github.com/Shreyas-S-Raman/dogvision-eyefixations",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[0]), 'https://arxiv.org/abs/2311.11988'), SUBMISSIONS[5], SUBMISSIONS[6]],
    topics_and_libraries: [TOPICS_LIBRARIES[0],TOPICS_LIBRARIES[1],TOPICS_LIBRARIES[2], TOPICS_LIBRARIES[10], TOPICS_LIBRARIES[12], TOPICS_LIBRARIES[15], TOPICS_LIBRARIES[19]]
  },
  {
    icon_path: "media/cape_icon.png",
    alt_name: "CAPE",
    name: "CAPE: Corrective Actions from Precondition Errors using Large Language Models",
    catchphrase: "First Author | LangRob @ CoRL 2023, ICRA 2024 | Honors Thesis",
    //bulletpoints: [],
    github_link: "https://www.github.com",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[0]),"https://arxiv.org/abs/2211.09935"),updateLink(deepCopy(SUBMISSIONS[3]), 'https://openreview.net/forum?id=LW2YwzqKKP&nesting=2&sort=date-desc'), SUBMISSIONS[2], updateLink(deepCopy(SUBMISSIONS[4]), 'https://openreview.net/forum?id=cMDMRBe1TKs'), updateLink(deepCopy(SUBMISSIONS[11]),'https://shreyas-s-raman.github.io/CAPE/')],
    topics_and_libraries: [TOPICS_LIBRARIES[3], TOPICS_LIBRARIES[4], TOPICS_LIBRARIES[13], TOPICS_LIBRARIES[14], TOPICS_LIBRARIES[16], TOPICS_LIBRARIES[18], TOPICS_LIBRARIES[21], TOPICS_LIBRARIES[26], TOPICS_LIBRARIES[30], TOPICS_LIBRARIES[32]]
  },
  {
    icon_path: "media/safety_chip_icon.png",
    alt_name: "safety_chip_icon",
    name: "Plug in The Safety Chip: Enforcing Constraints for LLM-driven Robot Agents",
    catchphrase: "Co-Author | LangRob @ CoRL, ICRA 2024",
    //bulletpoints: [],
    github_link: "https://www.github.com",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[0]),'https://arxiv.org/abs/2309.09919'), updateLink(deepCopy(SUBMISSIONS[3]), 'https://openreview.net/forum?id=INvxF4iQ34&nesting=2&sort=date-desc'), SUBMISSIONS[2], updateLink(deepCopy(SUBMISSIONS[11]), 'https://yzylmc.github.io/safety-chip/')],
    topics_and_libraries: [TOPICS_LIBRARIES[3], TOPICS_LIBRARIES[4], TOPICS_LIBRARIES[13], TOPICS_LIBRARIES[14], TOPICS_LIBRARIES[16], TOPICS_LIBRARIES[18], TOPICS_LIBRARIES[21], TOPICS_LIBRARIES[22], TOPICS_LIBRARIES[26], TOPICS_LIBRARIES[30]]
  },
  {
    icon_path: "media/tiered_learning_icon.png",
    alt_name: "Tiered Rewards",
    name: "Tiered Reward Functions: Specifying and Fast Learning of Desired Behavior",
    catchphrase: "Co-Author | RLC 2024",
    //bulletpoints: [ ],
    github_link: "https://www.github.com",
    submission_links: [SUBMISSIONS[0], SUBMISSIONS[12], updateLink(deepCopy(SUBMISSIONS[11]), 'https://zhouzypaul.github.io/tiered_reward/')],
    topics_and_libraries: [TOPICS_LIBRARIES[11],TOPICS_LIBRARIES[24], TOPICS_LIBRARIES[25]]
  },
  {
    icon_path: "media/eeg_icon.png",
    alt_name: "Cardiac Arrest",
    name: "Development of a CNN for GPD Classification in Cardiac Arrest Patients",
    catchphrase: "Acknowledgement | Brown University Archive",
    //bulletpoints: [],
    github_link: "https://www.github.com",
    submission_links: [SUBMISSIONS[8]],
    topics_and_libraries: [TOPICS_LIBRARIES[2], TOPICS_LIBRARIES[7], TOPICS_LIBRARIES[27], TOPICS_LIBRARIES[28]]
  },
  {
    icon_path: "media/hierarchical_planning_icon.png",
    alt_name: "Hierarchical Planning",
    name: "You Knew What I Meant: Improving HRC of Hierarchical Planning through LLMs",
    catchphrase: "Co-Author | ASPIRE HSEF 2024",
    //bulletpoints: [],
    github_link: "https://www.github.com",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[18]), 'https://hfesam2024.conference-program.com/presentation/?id=POS259&sess=sess108')],
    topics_and_libraries: [TOPICS_LIBRARIES[18],TOPICS_LIBRARIES[21], TOPICS_LIBRARIES[26], TOPICS_LIBRARIES[29], TOPICS_LIBRARIES[30], TOPICS_LIBRARIES[32]]
  },
  {
    icon_path: "media/seamcarve_icon.png",
    alt_name: "Image Editing",
    name: "Visual-language embeddings with improved latent semantics for image editing",
    catchphrase: "Co-Author | In Preparation for ICML 2025",
    //bulletpoints: [],
    github_link: "https://www.github.com",
    submission_links: [SUBMISSIONS[16]],
    topics_and_libraries: [TOPICS_LIBRARIES[1], TOPICS_LIBRARIES[12], TOPICS_LIBRARIES[13],TOPICS_LIBRARIES[14], TOPICS_LIBRARIES[18], TOPICS_LIBRARIES[31]]

  },

  {
    icon_path: "media/recap_icon.png",
    alt_name: "ReCap",
    name: "RECAP: Reconstructing Images for Caption Evaluation",
    catchphrase: "Co-Author | Brown University Archive",
    github_link: "https://www.github.com",
    submission_links: [updateLink(deepCopy(SUBMISSIONS[8]), "https://cs.brown.edu/media/filer_public/1f/75/1f75f7f7-836d-4baa-83c6-6d4c14dc71ca/changadrian_feuchtsheridan_ramanshreyas_sundara.pdf")],
    topics_and_libraries:[TOPICS_LIBRARIES[12], TOPICS_LIBRARIES[13], TOPICS_LIBRARIES[14], TOPICS_LIBRARIES[24], TOPICS_LIBRARIES[31]]
  }
  
]



const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.projectsTitle}>Publications & Research</h2>

    {Array.from(RESEARCH_DETAILS.keys()).map((val, index) => (
      
      <ResearchBox key={index} submission_links={RESEARCH_DETAILS[val].submission_links} icon={RESEARCH_DETAILS[val].icon_path} alt_icon_name = {RESEARCH_DETAILS[val].alt_name} github_link = {RESEARCH_DETAILS[val].github_link} name = {RESEARCH_DETAILS[val].name} catchphrase = {RESEARCH_DETAILS[val].catchphrase} filters = {RESEARCH_DETAILS[val].topics_and_libraries}/>
    ))}


  </div>
);

export default Projects;
