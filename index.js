// grab the form
const form = document.querySelector(`form`);
// when the form is submitted
form.addEventListener(`submit`, async (event) => {
  event.preventDefault();
  // grab the input
  const input = document.querySelector(`input`);
  // get the value from the input
  const pokemonName = input.value;
  try {
    // call the pokemon API with the value (https://pokeapi.co/api/v2/pokemon/[name])
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
  
    // go through the abilties
    // create a new array with just the names of the abilities
    const pokemonAbilities = pokemonData.abilities.map((pokemonAbility) => {
      return pokemonAbility.ability.name;
    });
  
    // create a new list item
    const pokemonLI = document.createElement(`li`);
    // put the pokemon information in the list item
    pokemonLI.innerHTML = `
      <h3>${pokemonData.name}</h3>
      <p>${pokemonData.name} weighs ${pokemonData.weight} lbs</p>
      <p>${pokemonData.name} has the following abilities: ${pokemonAbilities.join(` & `)}</p>
    `;
    // grab the ol
    const ol = document.querySelector(`ol`);
    // attach the list item to the ol
    ol.append(pokemonLI);
  } catch(err) {
    alert(`there was an error fetching your pokemon`);
  } finally {
    console.log(`I love pokemon`);
  }
});

