const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const typesContainer = document.getElementById("types");

function getStat(creature, statName) {
  const statObj = creature.stats.find(s => s.name === statName);
  return statObj ? statObj.base_stat : 0;
}

function displaySingleCreature(creature) {
  creatureName.textContent = creature.name.toUpperCase();
  creatureId.textContent = `#${creature.id}`;
  weight.textContent = `Weight: ${creature.weight}`;
  height.textContent = `Height: ${creature.height}`;
  hp.textContent = "HP: " + getStat(creature, "hp");
  attack.textContent = "Attack: " + getStat(creature, "attack");
  defense.textContent = "Defense: " + getStat(creature, "defense");
  specialAttack.textContent = "Special-Attack: " + getStat(creature, "special-attack");
  specialDefense.textContent = "Special-Defense: " + getStat(creature, "special-defense");
  speed.textContent = "Speed: " + getStat(creature, "speed");

  typesContainer.innerHTML = "";
  creature.types.forEach(t => {
    const typeEl = document.createElement("p");
    typeEl.textContent = t.name.toUpperCase();
    typesContainer.appendChild(typeEl);
  });
}

searchButton.addEventListener("click", () => {
  const term = input.value.trim();

  if (!term) {
    alert("Creature not found");
    return;
  }

  fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${term.toLowerCase()}`)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => {
      displaySingleCreature(data);
    })
    .catch(() => {
      alert("Creature not found");
      creatureName.textContent = "";
      creatureId.textContent = "";
      weight.textContent = "";
      height.textContent = "";
      hp.textContent = "";
      attack.textContent = "";
      defense.textContent = "";
      specialAttack.textContent = "";
      specialDefense.textContent = "";
      speed.textContent = "";
      typesContainer.innerHTML = "";
    });
});
