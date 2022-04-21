let marketInput = document.querySelector("#market");
let button = document.querySelector("#btn")
let elBtn = document.querySelector(".btn")
let list = document.querySelector("#list")
let elLabel = document.querySelector(".input")
let elYour = document.querySelector(".output")
let elOl = document.querySelector(".choose__list")
let elItem = document.querySelector(".choose__item")
let arrayMarket = [];

marketInput.addEventListener("change", () => {
  let market = marketInput.value.trim();

  if (market.length < 3 || market.length > 15 || !isNaN(market)) {
    return;
  }

  arrayMarket.push(market);
  
  
  elOl.innerHTML = null

  for (let el of arrayMarket) {
    elItem = document.createElement("li");
    elItem.style.color = 'black'
    elItem.textContent = el;
    elOl.append(elItem);
  }

  marketInput.value = null
})

button.addEventListener('click', (e) => {
  e.preventDefault()

  arrayMarket.pop()
})