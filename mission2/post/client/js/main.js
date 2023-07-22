/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { data } from "./data.js";
import { AudioPlayer } from "./audio.js";

function getNode(node) {
  return document.querySelector(node);
}

function posterChanege(target, value) {
  const mainPoster = getNode(".visual div img");

  if (typeof target !== "string") {
    throw new SyntaxError(
      "posterNameChanege 함수의 첫번째 인자인 target은 string값을 받습니다."
    );
  }
  return mainPoster.setAttribute(target, `./assets/${value}.jpeg`);
}

function posterColorChange(color) {
  return (document.body.style.background = `linear-gradient(to bottom, ${color} 100%, ${color} 20%)`);
}

function posterNameChange(value) {
  const posterTitle = getNode(".nickName");
  posterTitle.textContent = value.name;
}

function characterAudio(value) {
  const source = `assets/audio/${value.toLowerCase()}.m4a`;
  const audio = new AudioPlayer(source);
  audio.play();
}

function handleChangePoster(event) {
  const list = document.querySelectorAll(".nav ul li");
  const target = event.target.closest("li");
  const dataGet = target.getAttribute("data-index");
  const DATA_INDEX = data[dataGet - 1];

  if (!target) return;

  list.forEach((item) => {
    item.classList.remove("is-active");
  });

  target.classList.add("is-active");

  posterChanege("src", DATA_INDEX.name);

  posterColorChange(DATA_INDEX.color);

  posterNameChange(DATA_INDEX);

  characterAudio(DATA_INDEX.name);
}

(function eventSetting() {
  const nav = getNode(".nav ul");
  nav.addEventListener("click", handleChangePoster);
})();
