import Link from "next/link";

export default function PokemonList({ filteredPokemon }) {
  return (
    <div className="flex-grow overflow-y-auto max-h-[calc(100vh-380px)]">
      <div className="flex flex-wrap justify-center gap-8 mt-6 px-4">
        {filteredPokemon.map((pokemon) => (
          <Link
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl hover:bg-gray-200 transition-transform transform hover:scale-105 flex flex-col items-center w-60 sm:w-48 md:w-56"
          >
            <img
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              alt={pokemon.name}
              className="w-24 h-24 object-contain rounded-full border-2 border-indigo-500 shadow-md"
            />
            <p className="capitalize font-semibold text-lg text-gray-700 mt-4">
              {pokemon.name}
            </p>
            <span className="text-blue-500 text-sm font-medium mt-2">
              Details →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
