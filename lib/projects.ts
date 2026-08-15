export type Project = {
  repo: string;
  href: string;
  title: string;
  subtitle: string;
  timeframe: string;
  summary: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
};

export const projects: Project[] = [
  {
    repo: "ranegray/pincer",
    href: "https://github.com/ranegray/pincer",
    title: "xLeRobot Platform",
    subtitle: "Vision-to-grasping pipeline for low-cost robotic hardware",
    timeframe: "2026 - Present",
    summary:
      "A perception-to-manipulation system built on xLeRobot hardware with RGB-D sensing, camera-to-base transforms, and task-based inverse kinematics.",
    image: {
      src: "/images/xlerobot.jpeg",
      alt: "Dual-arm xLeRobot with grippers and a camera mast mounted on a rolling cart",
      position: "center 32%",
    },
  },
  {
    repo: "clickandwhirr.com",
    href: "https://clickandwhirr.com",
    title: "Click & Whirr",
    subtitle: "Interactive lessons for learning robot control in the browser",
    timeframe: "2025 - Present",
    summary:
      "A learning platform where students write real Python to drive a simulated robot, covering line following, PID control, odometry, and path planning, building up their own robot library lesson by lesson.",
    image: {
      src: "/images/click-whirr.png",
      alt: "Click & Whirr lesson workspace with a Python code editor beside a simulated robot following a curved line",
    },
  },
];
