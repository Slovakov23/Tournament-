const original = [
  { name: "Маргоша", img: "images/1.jpg" },
  { name: "Солевая", img: "images/2.jpg" },
  { name: "Ира Дашкина", img: "images/3.jpg" },
  { name: "Даша", img: "images/4.jpg" }
  { name: "Бывшая Прайм", img: "images/5.jpg" },
  { name: "Царик", img: "images/6.jpg" },
  { name: "Настя", img: "images/7.jpg" },
  { name: "моя бывшая", img: "images/8.jpg" },

];

let pool = [];
let pair = [];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function start() {
  pool = shuffle([...original]);
  document.getElementById("restart").style.display = "none";
  next();
}

function next() {
  if (pool.length === 1) {
    showWinner(pool[0]);
    return;
  }

  pair = [pool.pop(), pool.pop()];

  document.getElementById("img1").src = pair[0].img;
  document.getElementById("name1").innerText = pair[0].name;

  document.getElementById("img2").src = pair[1].img;
  document.getElementById("name2").innerText = pair[1].name;
}

function pick(index) {
  pool.unshift(pair[index]);
  next();
}

function showWinner(person) {
  document.getElementById("battle").innerHTML = `
    <div style="width:100%">
      <img src="${person.img}" style="width:70%;border-radius:15px">
      <h2>🏆 ${person.name}</h2>
    </div>
  `;
  document.getElementById("restart").style.display = "block";
}

start();
