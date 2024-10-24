function saveCharacter() {
  const name = document.getElementById("name").value;
  const characterClass = document.getElementById("class").value;
  const race = document.getElementById("race").value;
  const strength = document.getElementById("strength").value;
  const dexterity = document.getElementById("dexterity").value;
  const constitution = document.getElementById("constitution").value;
  const intelligence = document.getElementById("intelligence").value;
  const wisdom = document.getElementById("wisdom").value;
  const charisma = document.getElementById("charisma").value;

  const character = {
      name,
      characterClass,
      race,
      stats: {
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma
      }
  };

  document.getElementById("savedCharacter").innerHTML = `
      <h2>Character Saved:</h2>
      <p><strong>Name:</strong> ${character.name}</p>
      <p><strong>Class:</strong> ${character.characterClass}</p>
      <p><strong>Race:</strong> ${character.race}</p>
      <h3>Stats:</h3>
      <p><strong>Strength:</strong> ${character.stats.strength}</p>
      <p><strong>Dexterity:</strong> ${character.stats.dexterity}</p>
      <p><strong>Constitution:</strong> ${character.stats.constitution}</p>
      <p><strong>Intelligence:</strong> ${character.stats.intelligence}</p>
      <p><strong>Wisdom:</strong> ${character.stats.wisdom}</p>
      <p><strong>Charisma:</strong> ${character.stats.charisma}</p>
  `;
}
function calculateModifier(stat) {
return Math.floor((stat - 10) / 2);
}

function saveCharacter() {
const name = document.getElementById("name").value;
const characterClass = document.getElementById("class").value;
const race = document.getElementById("race").value;
const strength = parseInt(document.getElementById("strength").value);
const dexterity = parseInt(document.getElementById("dexterity").value);
const constitution = parseInt(document.getElementById("constitution").value);
const intelligence = parseInt(document.getElementById("intelligence").value);
const wisdom = parseInt(document.getElementById("wisdom").value);
const charisma = parseInt(document.getElementById("charisma").value);

const modifiers = {
    strength: calculateModifier(strength),
    dexterity: calculateModifier(dexterity),
    constitution: calculateModifier(constitution),
    intelligence: calculateModifier(intelligence),
    wisdom: calculateModifier(wisdom),
    charisma: calculateModifier(charisma)
};

document.getElementById("savedCharacter").innerHTML = `
    <h2>Character Saved:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Class:</strong> ${characterClass}</p>
    <p><strong>Race:</strong> ${race}</p>
    <h3>Stats:</h3>
    <p><strong>Strength:</strong> ${strength} (Modifier: ${modifiers.strength})</p>
    <p><strong>Dexterity:</strong> ${dexterity} (Modifier: ${modifiers.dexterity})</p>
    <p><strong>Constitution:</strong> ${constitution} (Modifier: ${modifiers.constitution})</p>
    <p><strong>Intelligence:</strong> ${intelligence} (Modifier: ${modifiers.intelligence})</p>
    <p><strong>Wisdom:</strong> ${wisdom} (Modifier: ${modifiers.wisdom})</p>
    <p><strong>Charisma:</strong> ${charisma} (Modifier: ${modifiers.charisma})</p>
`;
}

function rollDiceForStat() {
let rolls = [];
for (let i = 0; i < 4; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
}
rolls.sort(); // Sort rolls to easily drop the lowest
rolls.shift(); // Remove the lowest roll
return rolls.reduce((a, b) => a + b, 0); // Sum the remaining 3 rolls
}

function generateRandomStats() {
document.getElementById("strength").value = rollDiceForStat();
document.getElementById("dexterity").value = rollDiceForStat();
document.getElementById("constitution").value = rollDiceForStat();
document.getElementById("intelligence").value = rollDiceForStat();
document.getElementById("wisdom").value = rollDiceForStat();
document.getElementById("charisma").value = rollDiceForStat();
}
