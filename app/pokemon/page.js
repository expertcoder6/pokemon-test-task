"use client";

import React, { useState, useEffect, useMemo } from "react";
import { fetchPokemons, getPokemonTypeOptions } from "@/lib/actions";
import PokemonTypeFilter from "@/components/PokemonTypeFilter";
import PokemonSearch from "@/components/PokemonSearch";
import PokemonList from "@/components/PokemonList";

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonTypeOptions, setPokemonTypeOptions] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPokemonTypeOptions = async () => {
      const options = await getPokemonTypeOptions();
      setPokemonTypeOptions(options);
    };
    fetchPokemonTypeOptions();
  }, []);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemon = await fetchPokemons(pokemonType);
      setPokemonList(pokemon);
    };
    fetchPokemonData();
  }, [pokemonType]);

  const filteredPokemon = useMemo(
    () =>
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, pokemonList]
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-t from-gray-50 to-white min-h-screen rounded-lg shadow-xl flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 text-shadow-md">
        Pokémon World
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 items-center justify-center p-6 bg-white rounded-lg shadow-md mb-8 transform transition-all duration-300 ease-in-out">
        <PokemonTypeFilter
          pokemonTypeOptions={pokemonTypeOptions}
          setPokemonType={setPokemonType}
          pokemonType={pokemonType}
          setSearchQuery={setSearchQuery}
        />
        <PokemonSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <PokemonList filteredPokemon={filteredPokemon} />
    </div>
  );
}
