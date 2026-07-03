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
  {
    repo: "ranegray/ros2-racer",
    href: "https://github.com/ranegray/ros2-racer",
    title: "iRobot Create 3",
    subtitle: "Autonomy stack and telemetry dashboard for a small racecar",
    timeframe: "2026",
    summary:
      "A modular ROS 2 workspace for autonomous racing experiments with sensor bringup, reactive navigation, and a live telemetry dashboard.",
    image: {
      src: "/images/ros2-racer-v2.png",
      alt: "Roomba-based robot with a lidar and camera tower driving across a wood floor",
    },
  },
  {
    repo: "ranegray/webots_rl",
    href: "https://github.com/ranegray/webots_rl",
    title: "Mobile Robot RL",
    subtitle: "Q-learning controller for e-puck track navigation",
    timeframe: "2025",
    summary:
      "A reinforcement learning experiment in Webots that trains an e-puck to navigate a track using discretized infrared observations and reward shaping.",
    image: {
      src: "/images/webots-rl-v3.png",
      alt: "Overhead view of a simulated e-puck robot navigating a walled track in Webots with a magnified inset",
    },
  },
];
