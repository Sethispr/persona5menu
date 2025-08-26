// Settings

const svgWidth = 100; // must match viewBox in HTML
const svgHeight = 50;
const animationSpeed = 120; // speed in ms

// 0 = go to edge
// higher = points stay further from edge
// max: width/2 or height/2
const horizontalEdgePadding = 0;
const verticalEdgePadding = 0;

// higher = points stay further from center
// 0 = points may touch
// max: width/2 or height/2
const horizontalCenterPadding = 20;
const verticalCenterPadding = 5;

const menuPositions = [
  { left: '50%', top: '26.5%', width: '15%', height: '8%' },
  { left: '51%', top: '32.4%', width: '15%', height: '8%' },
  { left: '46%', top: '38%', width: '24%', height: '8%' },
  { left: '43%', top: '43.3%', width: '20%', height: '8%' },
  { left: '45.5%', top: '50%', width: '20%', height: '8%' },
  { left: '39%', top: '55.2%', width: '32%', height: '7%' },
  { left: '40%', top: '61%', width: '20%', height: '8%' },
  { left: '42.5%', top: '66.6%', width: '20%', height: '8%' },
  { left: '41.25%', top: '72%', width: '20%', height: '8%' },
];

// Animation

let currentMenuItem = 0;
