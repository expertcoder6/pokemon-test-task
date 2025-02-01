export default function PokemonSearch({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search Pokémon"
      className="border border-gray-300 p-3 rounded-lg shadow-sm bg-gray-100 text-gray-800 focus:outline-none hover:bg-gray-200 transition duration-150 ease-in-out w-full sm:w-2/3"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
