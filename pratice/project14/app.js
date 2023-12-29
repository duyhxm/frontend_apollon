let currentVariableValue = getComputedStyle(document.documentElement).getPropertyValue('--width');

// In ra giá trị hiện tại của biến
console.log('Current value:', currentVariableValue);

// Thay đổi giá trị của biến
document.documentElement.style.setProperty('--width', '30px');

// In ra giá trị mới của biến
console.log('New value:', getComputedStyle(document.documentElement).getPropertyValue('--width'));

const mouse = document.querySelector(".mouse");
const dot = document.querySelector(".dot");

let height = parseInt(getComputedStyle(mouse).getPropertyValue("height"), 10);
let border = parseInt(getComputedStyle(mouse).getPropertyValue("border"), 10);
let margin = parseInt(getComputedStyle(dot).getPropertyValue("margin"), 10);
let size = parseInt(getComputedStyle(dot).getPropertyValue("width"), 10);
let distanceToMove = height - border * 2 - margin * 3/2 - size;

document.documentElement.style.setProperty('--distanceToMove', `${distanceToMove}px`);

let dis = getComputedStyle(document.documentElement).getPropertyValue('--distanceToMove');

console.log(dis);




