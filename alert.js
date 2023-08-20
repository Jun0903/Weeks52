let cnt = 0;
const button = document.getElementById("btn");
const span = document.querySelector("span");
function clickCounter() {
  cnt += 1;
  span.innerText = `Total Click: ${cnt}`;
  console.log(cnt);
}
button.addEventListener("click", clickCounter);
