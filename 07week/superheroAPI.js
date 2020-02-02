var randomInt1 = Math.floor(Math.random() * 731) + 1;
var randomInt2 = Math.floor(Math.random() * 731) + 1;
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var targetUrl1 = 'https://superheroapi.com/api/10222020504612661/' + randomInt1;
var targetUrl2 = 'https://superheroapi.com/api/10222020504612661/' + randomInt2

let arrayOfHeros = [];

window.onload = function() {
  getHero1();
  getHero2();
}

const getHero1 = () => {
  fetch(proxyUrl + targetUrl1)
    .then(res => res.json())
    .then(hero => arrayOfHeros.push(hero));
}

const getHero2 = () => {
  fetch(proxyUrl + targetUrl2)
    .then(res => res.json())
    .then(hero => arrayOfHeros.push(hero));
}

const displayHeros = function() {
  const heros = document.getElementById('heros');

  arrayOfHeros.map(function(element) {
    const li = document.createElement('li')
    const h2 = document.createElement('h2')
    li.classList.add('hero-item');
    const text = document.createTextNode(element.name);
    const img = document.createElement('img');
    img.src = element.image.url;
    h2.appendChild(text);
    heros.append(h2);
    let totalPower = parseInt(element.powerstats.intelligence) +
                       parseInt(element.powerstats.strength) +
                       parseInt(element.powerstats.durability) +
                       parseInt(element.powerstats.speed) +
                       parseInt(element.powerstats.power) +
                       parseInt(element.powerstats.combat);
    const li2 = document.createElement('li');
    li2.classList.add('power-rating');
    const text2 = document.createTextNode(`Power Rating: ${totalPower}`);
    if (isNaN(totalPower)) {
    text2  = 'Power Rating: ?????';
   }
    li2.appendChild(text2);
    heros.append(li2);
    heros.append(li);
    heros.append(img);
  })
}

let heroOnePower = 0;
let heroTwoPower = 0;

function fight() {
  console.log('fight clicked');
  let victor;
  let defeated;
  const heros = document.getElementById('hero-container');
  const h3 = document.createElement('h3');
  heroOnePower =  parseInt(arrayOfHeros[0].powerstats.intelligence) +
                  parseInt(arrayOfHeros[0].powerstats.strength) +
                  parseInt(arrayOfHeros[0].powerstats.durability) +
                  parseInt(arrayOfHeros[0].powerstats.speed) +
                  parseInt(arrayOfHeros[0].powerstats.power) +
                  parseInt(arrayOfHeros[0].powerstats.combat);

  heroTwoPower =  parseInt(arrayOfHeros[1].powerstats.intelligence) +
                  parseInt(arrayOfHeros[1].powerstats.strength) +
                  parseInt(arrayOfHeros[1].powerstats.durability) +
                  parseInt(arrayOfHeros[1].powerstats.speed) +
                  parseInt(arrayOfHeros[1].powerstats.power) +
                  parseInt(arrayOfHeros[1].powerstats.combat);

  if (isNaN(heroOnePower)) {
    heroOnePower = Math.floor(Math.random() * 350) + 1;
  }

  if (isNaN(heroTwoPower)) {
    heroTwoPower = Math.floor(Math.random() * 350) + 1;
  }

  if (heroOnePower > heroTwoPower) {
    victor = arrayOfHeros[0].name;
    defeated = arrayOfHeros[1].name;
    h3.innerText = (`${victor} has defeated ${defeated}!!`);
  } else if (heroTwoPower > heroOnePower) {
    victor = arrayOfHeros[1].name;
    defeated = arrayOfHeros[0].name;
    h3.innerText = (`${victor} has defeated ${defeated}!!`);
  }
  heros.append(h3);
}

console.log(arrayOfHeros);