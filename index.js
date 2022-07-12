// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

//Challenge
//Create dom elements mimicking the elements below
//use the .createElement, .append and .qierySelector methods

/*
<div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="Kazi Ariyan" />
          <p class="name">Kazi Ariyan</p>
          <p class="email">info@easylearningbd.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
*/

import { monsters } from "./monsters.js";
for (let monsterData of monsters) {
  showMon(monsterData);
} // This code here is used to display all the monsters to the dom

function showMon(monsterData) {
  let monster = document.createElement("div");
  monster.className = "monster";
  let image = document.createElement("img");
  image.src = `https://robohash.org/${monsterData.id}?set=set2`;
  image.alt = "Jude Oba";
  let monName = document.createElement("p");
  monName.className = "name";
  monName.innerText = monsterData.name;
  let email = document.createElement("p");
  email.className = "email";
  email.innerText = monsterData.email;
  monster.append(image, monName, email);
  //   console.log(monster);
  let monsters = document.querySelector(".monsters");
  monsters.append(monster);
} // This code here is basically what can be used to receive data from an API or a JSON file

function notFoundMon() {
  let notFound = document.createElement("div");
  notFound.style.display = "none";
  notFound.className = "p-5 not-found";
  let span = document.createElement("span");
  span.innerText = "404";
  let notFoundAlert = document.createElement("h1");
  notFoundAlert.innerText = " 🧟‍♂️ No Monster Found 🧟‍♂️";
  notFound.append(span, notFoundAlert);

  let monsters = document.querySelector(".monsters");
  monsters.append(notFound);
}
notFoundMon();

//Get monsters using ES6 modules,
//You'll basically be fetching data from an API
//You'll fetch the data by, importing it into the index.js
//Then create a for-loop in order to show all the data, and then pass in the parameter of the for loop into the function so it can take in arguments

//first we have to get all the key values from our search bar, we'll use the keyup value as the event as well as the event target to get the value

document.querySelector("#search-monster").addEventListener("keyup", (e) => {
  let keyword = e.target.value.toLowerCase(); // this code picks up the word typed into the search bar and converts it to lower case
  console.log(keyword);

  let notFound = true; // we had to create a boolean for like a state, if the search doesn't yield any result, we have to show them a 404 page
  let findMon = document.querySelectorAll(".monster"); // this fetches all the elements nested in the .monster class
  for (let mon of findMon) {
    let name = mon.children[1].innerText.toLowerCase(); // since we are working with HTML elements, we have to use the children method to get one element of the monsters class
    let email = mon.children[2].innerText.toLowerCase();

    //The entire piece of code is used to check if our word typed into the search bar is present in any of the monster data
    if (name.includes(keyword) || email.includes(keyword)) {
      mon.style.display = "block";
      notFound = false;
    } else {
      mon.style.display = "none";
    }
    if (notFound) {
      document.querySelector(".not-found").style.display = "block";
    } else {
      document.querySelector(".not-found").style.display = "none";
    }
  }
});
