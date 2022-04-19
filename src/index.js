import { ReplaceImg } from "./ReplaceImg.js";
const cards = data;

console.log(cards[0]);

const listContainer = document.querySelector(".cards");
cards.forEach((card) => {
  card.switchImg = true;
  createCard(card);
});

function createCard(card) {
  const games = card.game_indices.map((game) => {
    return game.game_index;
  });
  const uniqueGames = Array.from(new Set(games));
  const html = `<li data-img=${card.switchImg} class="card">
  <h2 class="card--title">${card.name}</h2>
  <img
    width="256"
    class="card--img"
    src="${card.sprites.other.dream_world.front_default}"
  />
  <ul class="card--text">
       ${card.stats
         .map((stats) => {
           return `<li>${stats.stat.name.toUpperCase()}   ${
             stats.base_stat
           }</li>`;
         })
         .join("")}
         <li>GAMES: ${uniqueGames.join("  ")}</li>
  </ul>
</li>`;

  listContainer.insertAdjacentHTML("afterbegin", html);
}

listContainer.addEventListener("click", changeImg);

function changeImg(e) {
  const card = e.target.closest("li");
  let currImg = e.target.closest("li").querySelector("img");
  if (card.dataset.img === "true" && currImg) {
    new ReplaceImg(currImg).replaceSVG();
    card.dataset.img = false;
  } else if (currImg) {
    new ReplaceImg(currImg).replacePNG();
    card.dataset.img = true;
  }
}
