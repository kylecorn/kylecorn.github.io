export const bio = {
  name: "Kyle Cornell",
  title: "Computer Science Student",
  location: "University of Michigan",
  description: "Welcome to my portfolio showcasing personal projects and development work.",
  email: "kylcorn@umich.edu",
  phone: "(616) 337-2029",
  linkedin: "https://www.linkedin.com/in/kylecornell04/",
  github: "https://github.com/kylecorn",
  resume: "/Kyle_Cornell_Resume.pdf",
}

export const techStack = {
  languages: ["Python", "SQL", "JavaScript", "TypeScript", "C#", "Java", "C++"],
  frameworks: ["React", "Next.js", "Node.js", "Unity"],
  tools: ["Git", "Docker", "PostgreSQL", "MongoDB", "AWS"],
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  image: string
  imagePosition?: string // Optional custom image positioning (e.g., "center right", "bottom center")
  demo: string | null
  download: string | null
  repo: string | null
}

export const projects: Project[] = [
  {
    id: "zelda",
    title: "The Legend of Zelda (NES Remake)",
    description: "Developed the first dungeon of the original NES Zelda game including room features, items, weapons, and other overall basic features of the Zelda game.",
    longDescription: "This project involved recreating the first Zelda NES dungeon using modern Unity development practices.",
    technologies: ["Unity", "C#"],
    features: [
      "Dungeon room navigation system with seamless transitions",
      "Interactive item system with unique abilities",
      "Character animations and grid locked movement",
      "Interactive room mechanics and hidden areas",
      "Custom clone mechanic level (press 4 in game to use)",
    ],
    image: "/ZeldaPicture.png",
    demo: null,
    download: "/ZeldaGolden.zip",
    repo: null,
  },
  {
    id: "afterstep",
    title: "Afterstep",
    description: "Designed, developed, and animated my own game based around a ghost summon mechanic that teaches players game features through each level.",
    longDescription: "This project involved designing and developing a unique game mechanic and level to introduce it to players.",
    technologies: ["Unity", "C#"],
    features: [
      "Movement recorder and ghost summon mechanic",
      "Character animations for movement and interactions",
      "Level guided mechanic introductions",
      "Interactive strategy-focused level design",
      "Lighting and environmental themes/effects",
    ],
    image: "/Afterstep.png",
    demo: "https://kjcornell.itch.io/afterstep",
    download: null,
    repo: null,
  },
  {
    id: "monkeytopia",
    title: "Monkeytopia",
    description: "A base builder and tower defense game where you defend your Tree of Life from waves of attacking animals while building your base and growing bananas.",
    longDescription: "In Monkeytopia, you must defend your Tree of Life from waves of attacking animals while trying to build your base as big as possible. Choose your civilization path, defeat enemy waves, and grow as many bananas as possible.",
    technologies: ["Unity", "C#"],
    features: [
      "Base building mechanics",
      "Tower defense gameplay",
      "Wave-based enemy system",
      "Civilization path choices",
      "Banana resource management",
    ],
    image: "/Monkeytopia.png",
    imagePosition: "55% 45%", // Position image down a bit and to the right
    demo: "https://kjcornell.itch.io/monkeytopia",
    download: null,
    repo: null,
  },
  {
    id: "vr-classroom",
    title: "VR Classroom Simulation",
    description: "Built a classroom simulation in virtual reality with interactive elements, custom characters, and immersive environments using Meta Quest Pro, Blueprint scripting, and C++.",
    longDescription: "A comprehensive VR classroom simulation project built with Unreal Engine for Meta Quest Pro, featuring interactive elements, custom characters, and immersive environments. Developed using Blueprint scripting and C++ with OpenXR integration.",
    technologies: ["Unreal Engine", "Meta Quest Pro", "Blueprints", "C++", "OpenXR", "Sketchfab"],
    features: [
      "Interactive VR classroom environments",
      "Custom character implementation",
      "Blueprint scripting for gameplay logic",
      "C++ integration for performance",
      "OpenXR compatibility",
      "Immersive educational experiences",
    ],
    image: "/VRClassroom.png",
    demo: "https://www.youtube.com/watch?v=beETndPZri0",
    download: null,
    repo: null,
  },
]

export const experience = [
  {
    title: "Computer Science Student",
    company: "University of Michigan",
    period: "Present",
    description: "Pursuing a degree in Computer Science with focus on software engineering and game development.",
  },
]
