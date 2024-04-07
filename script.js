// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// let box3 = document.querySelector("#box3");
// let box4 = document.querySelector("#box4");
// let body = document.querySelector("body");

// box1.addEventListener("click", () => {
//   body.style.backgroundColor = "salmon";
// });

// box2.addEventListener("click", () => {
//   body.style.backgroundColor = "yellow";
// });

// box3.addEventListener("click", () => {
//   body.style.backgroundColor = "purple";
// });

// box4.addEventListener("click", () => {
//   body.style.backgroundColor = "skyblue";
// });
let body = document.querySelector("body");

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.target.classList[1] === "pink") {
      body.style.backgroundColor = "pink";
    } else if (e.target.classList[1] === "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.classList[1] === "purple") {
      body.style.backgroundColor = "purple";
    } else {
      body.style.backgroundColor = "skyblue";
    }
  });
});
