export const site = {
  name: "Rane Gray",
  url: "https://ranegray.com",
  email: "ranegray@outlook.com",
  description:
    "Robotics researcher at the Correll Lab, CU Boulder. Embodied agentic AI, perception, and manipulation.",
  location: "Boulder, CO",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/ranegray",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ranegray/",
    },
    {
      label: "Email",
      href: "mailto:ranegray@outlook.com",
    },
  ],
  paper: {
    title:
      "Cutting the Cord: System Architecture for Low-Cost, GPU-Accelerated Bimanual Mobile Manipulation",
    venue: "arXiv · cs.RO · 2026",
    href: "https://arxiv.org/abs/2603.09051",
    authors:
      "Artemis Shaw, Chen Liu, Justin Costa, Rane Gray, Alina Skowronek, Kevin Diaz, Nam Bui, Nikolaus Correll",
  },
  award: {
    title: "1st place, SO-101 + SmolVLA",
    venue: "Hugging Face × LeRobot Hackathon · June 2025",
    description:
      "Fine-tuned SmolVLA on 50 teleoperated drawing demonstrations and evaluated natural-language instruction-following on real SO-101 hardware.",
  },
  work: {
    name: "Ricoh USA",
    role: "Robotics Engineering Intern, continuing part-time",
    since: "Since May 2026",
    highlights: [
      "Physics-based digital twin of an industrial palletizing cell in NVIDIA Isaac Sim and Omniverse, built from production CAD into a tuned USD scene and driven by the real control software unmodified, so code changes no longer require the physical cell in order to be tested.",
      "Validated the twin's placement accuracy by hand against the real cell across 101 parts, 4 runs, and both pallet positions: roughly 2 mm mean error against a 10 mm job tolerance, repeatable to about 0.1 mm.",
      "Regression CI for the twin, diffing automated simulation runs against known-good baselines on validation-derived thresholds, alongside LLM-based automated code review on merge requests.",
      "Synthetic data generation from simulation to produce labeled training data for vision models.",
    ],
  },
  lab: {
    name: "Correll Lab, CU Boulder",
    href: "https://www.colorado.edu/lab/correll",
    since: "Since February 2025",
    highlights: [
      "Head and neck pan-tilt subsystem for the Unitree H1-2 humanoid, from mechanism design through ROS 2 control and platform validation.",
      "Apple Vision Pro teleoperation interface for the H1-2 with head and pose tracking, building on the Open-Television line of work.",
      "YOLO-seg perception pipeline for detecting and segmenting screws in cluttered scenes, feeding downstream manipulation for EV battery disassembly.",
    ],
  },
  previously:
    "Ten years in the Air Force and Colorado Air National Guard as an F-16 avionics systems expert. Led a 23-person team sustaining mission-ready aircraft across Arizona, South Korea, Germany, and Colorado.",
} as const;
