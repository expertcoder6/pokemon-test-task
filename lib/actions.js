// server action  for fetching pokemon and its type data

export async function fetchPokemons(pokemonType = "") {
  try {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
    if (pokemonType) {
      url = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch Pokémon");
    const data = await response.json();

    let pokemonList = pokemonType
      ? data.pokemon.map((p) => p.pokemon)
      : data.results;
    return pokemonList || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPokemonTypeOptions() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    if (!response.ok) throw new Error("Failed to fetch Pokémon types");
    const data = await response.json();
    return data.results.map((type) => type.name) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
