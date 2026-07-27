// function getColor(index, total) {
//     const start = (index * (360 / total)) % 360;
//     const middle = (start + 45) % 360;
//     const end = (start + 90) % 360;

//     return `linear-gradient(
//         45deg,
//         hsl(${start},90%,60%),
//         hsl(${middle},90%,70%),
//         hsl(${end},90%,60%)
//     )`;
// }

let hueOffset = 0;
function getColor(index, total) {
  const start = (index * (360 / total) + hueOffset) % 360;
  const middle = (start + 45) % 360;
  const end = (start + 90) % 360;

  return `linear-gradient(
        45deg,
        hsl(${start},90%,60%),
        hsl(${middle},90%,70%),
        hsl(${end},90%,60%)
    )`;
}

const flower = document.querySelector("#flower");
const leafCount = document.querySelector("#leafCount");
const leafCountValue = document.querySelector("#leafCountValue");
const animationSpeed = document.querySelector("#animationSpeed");
const animationSpeedValue = document.querySelector("#animationSpeedValue");
const radomColor = document.querySelector("#radomColor");
const animationOnOffBtn = document.querySelector("#animationOnOffBtn");

let isRatating = true;

function createFlower() {
  const flowerCenterCircle = flower.querySelector(".flower-center-circle");
  flower.innerHTML = "";
  flower.append(flowerCenterCircle);

  const count = parseInt(leafCount.value);
  leafCountValue.textContent = count;

  const angle = 360 / count;

  for (let i = 0; i < count; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    const angleValue = i * angle;
    leaf.style.rotate = `${angleValue}deg`;
    leaf.style.background = getColor(i, count);

    flower.append(leaf);
  }
}
function updateAnimationSpeed() {
  const speed = animationSpeed.value;
  animationSpeedValue.textContent = `${speed}s`;
  flower.style.animationDuration = `${speed}s`;
}

leafCount.addEventListener("input", createFlower);
animationSpeed.addEventListener("input", updateAnimationSpeed);
// radomColor.addEventListener("click", createFlower);
radomColor.addEventListener("click", () => {
  hueOffset = Math.floor(Math.random() * 360);
  createFlower();
});

animationOnOffBtn.addEventListener("click", () => {
  isRatating = !isRatating;
  flower.style.animationPlayState = isRatating ? "running" : "paused";
});
createFlower();
