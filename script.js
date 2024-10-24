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
// Character generation and states from the existing form
function calculateModifier(stat) {
  return Math.floor((stat - 10) / 2);
}

// Dice roll for random stats
function rollDiceForStat() {
  let rolls = [];
  for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  rolls.sort();
  rolls.shift(); // Remove the lowest roll
  return rolls.reduce((a, b) => a + b, 0);
}

// Derived stats
function calculateDerivedStats() {
  const dexterity = parseInt(document.getElementById("dexterity").value);
  const dexterityModifier = calculateModifier(dexterity);

  // Initiative = Dexterity modifier
  document.getElementById("initiative").value = dexterityModifier;

  // Armor Class: base 10 + Dexterity modifier
  let baseAC = 10;
  document.getElementById("armorClass").value = baseAC + dexterityModifier;
}

// Generate a simple D&D story based on the character states
function generateStory() {
  const name = document.getElementById("name").value;
  const characterClass = document.getElementById("class").value;
  const race = document.getElementById("race").value;
  const strength = parseInt(document.getElementById("strength").value);
  const dexterity = parseInt(document.getElementById("dexterity").value);
  const constitution = parseInt(document.getElementById("constitution").value);
  const intelligence = parseInt(document.getElementById("intelligence").value);
  const wisdom = parseInt(document.getElementById("wisdom").value);
  const charisma = parseInt(document.getElementById("charisma").value);
  const armorClass = parseInt(document.getElementById("armorClass").value);
  const initiative = parseInt(document.getElementById("initiative").value);
  const speed = parseInt(document.getElementById("speed").value);

  // Simple story elements
  const locations = ['a dark forest', 'an ancient dungeon', 'a bustling city', 'a quiet village'];
  const encounters = ['a group of bandits', 'a mystical wizard', 'a fierce dragon', 'a group of merchants'];
  const quests = ['rescue a missing person', 'find a legendary artifact', 'defeat a powerful enemy', 'deliver a mysterious package'];

  // Randomly pick story elements
  const location = locations[Math.floor(Math.random() * locations.length)];
  const encounter = encounters[Math.floor(Math.random() * encounters.length)];
  const quest = quests[Math.floor(Math.random() * quests.length)];

  // Random success/failure outcome based on relevant stat (e.g., dexterity for combat, wisdom for magic, etc.)
  const successRoll = Math.floor(Math.random() * 20) + 1 + calculateModifier(dexterity); // Roll a d20 plus modifier

  // Generate the story
  let story = `
      ${name}, the ${race} ${characterClass}, starts their adventure in ${location}.
      As they travel, they encounter ${encounter}.
      Their mission: ${quest}.
      They quickly assess the situation and prepare for action.
  `;

  if (successRoll > 10) {
      story += `
      With quick thinking and sharp reflexes, ${name} successfully navigates the encounter and completes their quest!
      Their dexterity of ${dexterity} and combat prowess serve them well.
      `;
  } else {
      story += `
      Unfortunately, ${name}'s ${dexterity} wasn't enough this time. They struggled to overcome the challenge and failed the quest.
      Perhaps better preparation next time will bring success.
      `;
  }

  document.getElementById("generatedStory").innerHTML = story;
}

function generateRandomStats() {
  document.getElementById("strength").value = rollDiceForStat();
  document.getElementById("dexterity").value = rollDiceForStat();
  document.getElementById("constitution").value = rollDiceForStat();
  document.getElementById("intelligence").value = rollDiceForStat();
  document.getElementById("wisdom").value = rollDiceForStat();
  document.getElementById("charisma").value = rollDiceForStat();

  calculateDerivedStats();
}
