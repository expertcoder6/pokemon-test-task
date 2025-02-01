export default function PokemonTypeFilter({
  pokemonTypeOptions,
  setPokemonType,
  pokemonType,
  setSearchQuery,
}) {
  const handlePokemonTypeChange = (e) => {
    setPokemonType(e.target.value);
    setSearchQuery("");
  };
  return (
    <select
      name="type"
      className="border border-gray-300 p-3 rounded-lg shadow-sm bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200 transition duration-150 ease-in-out w-full sm:w-1/3"
      value={pokemonType}
      onChange={handlePokemonTypeChange}
    >
      <option value="">All Types</option>
      {pokemonTypeOptions.map((type) => (
        <option key={type} value={type} className="capitalize">
          {type}
        </option>
      ))}
    </select>
  );
}
