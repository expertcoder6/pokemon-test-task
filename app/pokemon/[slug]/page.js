import Image from "next/image";
import Link from "next/link";
import arrowIcon from "@/public/arrow.svg";

async function getPokemonData(name) {
  try {
    console.log("Fetching data for:", name);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) throw new Error(`Failed to fetch data for ${name}`);
    return res.json();
  } catch (err) {
    console.log("Error fetching data:", err);
    return null;
  }
}

export default async function PokemonDetail({ params }) {
  const { slug: pokemon } = await params;
  const data = await getPokemonData(pokemon);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-600">Pokémon not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <div className="flex items-center text-gray-700 text-sm mb-6 space-x-2">
        <Link
          href="/pokemon"
          className="flex items-center p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
        >
          <Image src={arrowIcon} alt="Arrow Icon" width={24} height={24} />
        </Link>

        <span className="cursor-pointer hover:text-indigo-600">Pokémon</span>
        <span className="mx-2">→</span>
        <span className="capitalize">{pokemon}</span>
      </div>

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl mx-auto">
        <div className="bg-blue-500 rounded-xl overflow-hidden flex justify-center items-center p-6 mb-6">
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            }
            alt={pokemon}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="p-6 bg-blue-200 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Type:</strong>{" "}
            {data.types.map((t) => t.type.name).join(", ")}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Stats:</strong>{" "}
            {data.stats.map((s) => s.stat.name).join(", ")}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Abilities:</strong>{" "}
            {data.abilities.map((a) => a.ability.name).join(", ")}
          </p>
          <p className="text-gray-700">
            <strong>Some Moves:</strong>{" "}
            {data.moves
              .slice(0, 5)
              .map((m) => m.move.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
