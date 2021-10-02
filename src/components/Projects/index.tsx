import styles from "./index.module.css";
import ProjectBox, { Filters } from "./ProjectBox";

interface ProjectDetails{
  icon_path: string;
  alt_name:string;
  name: string;
  catchphrase: string;
  bulletpoints: Array<string>;
  github_link: string;
  languages: Array<Filters>;
  packages: Array<Filters>;
}

const PACKAGES: Array<Filters> = [
  {
    name: "NumPy",
    color: "#ACE38D",
  },
  {
    name:"CV2",
    color:"#ACE38D",
  },
  {
    name: "TensorFlow",
    color: "#ACE38D",
  },
  {
    name: "JavaFX",
    color: "#F88F46",
  },
  {
    name: "Shapes",
    color: "#F88F46",
  },
  {
    name: "Selenium",
    color: "#ACE38D",
  },
  {
    name: "requests",
    color: "#ACE38D",
  },
  {
    name:"Pandas",
    color: "#ACE38D",
  },
  {
    name:"PyGame",
    color: "#ACE38D",
  },
  {
    name: "sqlite3",
    color:"#c170e0",
  },
  {
    name: "matplotlib",
    color:"#ACE38D"
  },
  {
    name:"d3.js",
    color:"#c170e0"
  }

];

const FILTERS: Array<Filters> = [
  {
    name: "Python",
    color: "#6BB243",
  },
  {
    name: "Java",
    color: "#F76906",
  },

  {
    name: "JavaScript",
    color: "#9619C9",
  },
  {
    name: "React",
    color: "#3D95CB",
  },
  {
    name: "C",
    color: "#003970",
  },
  {
    name: "SQLite",
    color: "#9619C9",
  },
  {
    name: "MATLAB",
    color: "#c9be2c",
  },
  {
    name: "HTML/CSS",
    color: "#d10d0d",
  }

];

const PROJECT_DETAILS:  Array<ProjectDetails> = [
  {
    icon_path: "../../../media/dog_icon.png",
    alt_name:"Dog Fixations Image",
    name: "Tracking Dog Eye-Fixations",
    catchphrase: "Panoptic Object Segmentation in Videos | UTRA Award",
    bulletpoints: ['Led the Computer Vision branch of the project with the objective to track dog eye-fixations and correlate visual behavioral patterns of dogs','Sourced data sets of 35k+ images spanning 250k+ instances across 48 different classes and created a custom Mask-RCNN pipeline for transfer learning (across multiple GPUs)'],
    github_link: "https://www.github.com",
    languages: [FILTERS[0]],
    packages: [PACKAGES[0],PACKAGES[1],PACKAGES[2],PACKAGES[10]]
  },
  {
    icon_path: "../../../media/paleoai_icon.png",
    alt_name:"PaleoAI_icon",
    name: "PaleoAI: Taxonomical Identification",
    catchphrase: "Dataset Expansion | Generative Modelling",
    bulletpoints: ['Expanded existing leaf datasets 8× by adding 300,000+ new images, with unique ids and taxonomical details','New data improved model classification accuracy to >80%','Web-scraping Tool: scrapes online databases for image file-links; automatically saves images using a user-specified or auto-generated file structure','Taxonomic Lookup: an SQLite database used as a reference tool to filter family, genus and species names for the image dataset', 'Cycle-GAN: enhancing a Cycle-GAN model for translations between leaf and fossil images - used to generate synthetic training samples' ],
    github_link: "https://www.github.com",
    languages:[FILTERS[0],FILTERS[5]],
    packages:[PACKAGES[2],PACKAGES[5],PACKAGES[6],PACKAGES[7],PACKAGES[9]]
  },
  {
    icon_path: "../../../media/COVID_icon.png",
    alt_name:"COVID_SIR_icon",
    name: "COVID-19 Infection Modelling",
    catchphrase: "SIR Model | Predicting Disease Spread",
    bulletpoints: ['SIR model simulates the spread of a disease within a population to forecast infected, deceased and susceptible members over time','Includes 5 broad tunable parameters (and over 20 finer tunable parameters) to define a small population (its composition and size) as well the infection','Predicts disease spread over the broader population (death rates, recovery rates etc...) and between/within particular subgroups (i.e. to monitor "disease hotspots" or "contact tracing")'],
    github_link: "https://www.github.com",
    languages: [FILTERS[6]],
    packages: []
  },
  {
    icon_path: "../../../media/pathfinder_icon.png",
    alt_name:"Pathfinder_Icon",
    name: "Pathfinder 1.0",
    catchphrase: "Gridworld Search | BFS, DFS, A*, Greedy Search, Q-Learning, R-Max",
    bulletpoints: ['Multiple pathfinding algorithms (DFS, BFS, A* Search, Greedy Algorithm) and reinforcement learning algorithms (Q-Learning and R-Max) visualized on an easy to understand color-coded gridworld','Displays 4 types of tiles: \'start\' tiles [where the agent being], \'end\' tiles [the goal], \'wall\' tiles [where the agent cannot pass through], \'trap\' tiles [penalty tiles with high cost e.g. regions of high traffic] ', 'Setup the gridworld, pick your algorithm and let the agent run!'],
    github_link: "https://www.github.com",
    languages: [FILTERS[0]],
    packages: [PACKAGES[0], PACKAGES[8]]
  },
  {
    icon_path: "../../../media/videogame_icon.png",
    alt_name:"Dashboard_Visualizer_Icon",
    name: "Data Dashboard Visualizer",
    catchphrase: "Kaggle Datasets: Video Game Sales | Interactive + Animated Dashboard",
    bulletpoints: ['A thematic HTML web-page that serves as a data dashboard','Built interactive and stylized graphs, pie-charts and scatter plots (with summary tooltips) using d3.js','Created interactive user input streams [text/button input] to filter displayed data or perform scatter point regression in real-time [with animation]','Performed and displayed statistical analysis (e.g. box-whisker plot) that adapts search/display based on filters selected - also using d3.js','Completed as part of project for CS1951A - Data Science'],
    github_link: "https://www.github.com",
    languages: [FILTERS[2],FILTERS[7]],
    packages: [PACKAGES[11]]
  },
  {
    icon_path: "../../../media/seamcarve_icon.png",
    alt_name:"SeamCarve_Icon",
    name: "SeamCarve 1.0",
    catchphrase: "Image Resizing | Pixel Importance",
    bulletpoints: ['Implementation of liquid rescaling of an image through content-aware resizing', 'A GUI that displays the (jpg, jpeg or png) image to be resized along with a slider to vary the number of \'vertical seams\' carved out of the image','Calculates pixel importance and performs intelligent removal of the \'k\' lowest importance seams in the image, allowing for the image to be downscaled','Completed as part of project for CS0160 - Introduction to Data Structures and Algorithms'],
    github_link: "https://www.github.com",
    languages: [FILTERS[1]],
    packages: []
  },
  {
    icon_path: "../../../media/shell_icon.png",
    alt_name:"Shell_Icon",
    name: "Shell",
    catchphrase: "A Custom UNIX Shell Implementation",
    bulletpoints: ['A job-control system that parses input (bash) shell commands (e.g. cd, rm, ln, exit, pwd, ls, chdir etc...)  and executes, with appropriate error-handling if needed','Handles any other shell-commands via child processes using the fork system command (execv())','Handles input/output redirections, multi-threaded command execution, foreground and background jobs and signal masking/safety','Completed as part of project for CS0330 - Introduction to Computer Systems'],
    github_link: "https://www.github.com",
    languages: [FILTERS[4]],
    packages: []
  },
  {
    icon_path: "../../../media/flappybird_icon.png",
    alt_name:"Evolution_Icon",
    name: "Evolution",
    catchphrase: "Genetic Algorithm | Neural Network | FlappyBird",
    bulletpoints: ['A GUI to play FlappyBird (original single-player game) or let a genetic algorithm learn to play the game','Genetic Algorithm Implementation: using feed-forward neural net to train several \'FlappyBird\' agents and tracking \'fitness\' of agents; top-performing agents move to the next generation', 'Tunable Experiments: the generation/population size, mean gap between pipes and speed of the agents are all tunable to make the game more/less difficult','Neural Network Visulalization: GUI interface to visualize the dominant weights and inputs beind the best-performing agent in each generation','Completed as part of final project for CS1050 - Introduction to Object Oriented Programming'],
    github_link: "https://www.github.com",
    languages: [FILTERS[1]],
    packages: [PACKAGES[3], PACKAGES[4]]
  }
]

const Projects = () => (
  <div className={styles.container}>
    <h2 className={styles.projectsTitle}>My Recent Work</h2>

    {Array.from(PROJECT_DETAILS.keys()).map((val) => (
      <ProjectBox key={val} packages={PROJECT_DETAILS[val].packages} filters={PROJECT_DETAILS[val].languages} icon={PROJECT_DETAILS[val].icon_path} alt_icon_name = {PROJECT_DETAILS[val].alt_name} github_link = {PROJECT_DETAILS[val].github_link} name = {PROJECT_DETAILS[val].name} catchphrase = {PROJECT_DETAILS[val].catchphrase} description = {PROJECT_DETAILS[val].bulletpoints}/>
    ))}


  </div>
);

export default Projects;
