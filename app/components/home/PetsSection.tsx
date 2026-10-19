"use client";

import { useMemo, useState } from "react";
import { Heart } from "lucide-react";

import { pets } from "@/app/lib/petsData";
import { filterSortPets } from "@/app/lib/FilterSort";

import PetGrid from "./PetGrid";
import FilterBar from "./FilterBar";

export default function PetsSection() {
  const [sortParam, setSortParam] = useState("Newest");
  const [catParam, setCatParam] = useState("All Pets");
  const [searchParam, setSearchParam] = useState("");

  // Centralized favorite state
  const [favouriteNames, setFavouriteNames] = useState<string[]>(() =>
    pets.filter((pet) => pet.isFavourite).map((pet) => pet.name),
  );

  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavouriteToggle = (name: string) => {
    setFavouriteNames((previous) =>
      previous.includes(name)
        ? previous.filter((favourite) => favourite !== name)
        : [...previous, name],
    );
  };

  const filteredPets = useMemo(() => {
    const results = filterSortPets(pets, catParam, searchParam, sortParam);

    return showFavorites
      ? results.filter((pet) => favouriteNames.includes(pet.name))
      : results;
  }, [catParam, searchParam, sortParam, favouriteNames, showFavorites]);

  return (
    <section>
      <FilterBar
        sortParam={sortParam}
        onSortChange={setSortParam}
        catParam={catParam}
        onCatChange={setCatParam}
        searchParam={searchParam}
        onSearchChange={setSearchParam}
        availableCount={filteredPets.length}
      />

      <header className="isolate my-6 md:my-10">
        <div className="flex items-center gap-2">
          <span className="block h-2 w-8 rounded-full bg-primary" />
          <span className="text-xs font-medium uppercase tracking-wider text-neutral sm:text-sm">
            Adopt with Love
          </span>
        </div>

        <h1 className="font-headline text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-[40px]">
          Meet Your Future Best Friend
        </h1>

        <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
          <p className="font-body text-sm font-light text-gray-600 sm:text-base">
            Every pet has a story. Maybe yours starts here.
          </p>

          <button
            type="button"
            onClick={() => setShowFavorites((previous) => !previous)}
            aria-pressed={showFavorites}
            className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              showFavorites ? "bg-primary" : "bg-tertiary hover:opacity-90"
            }`}
          >
            <Heart size={16} className="text-red-500" fill="currentColor" />

            <span>
              {showFavorites ? "Show All Pets" : "Favorites"} (
              {favouriteNames.length})
            </span>
          </button>
        </div>
      </header>

      <PetGrid
        pets={filteredPets}
        favouriteNames={favouriteNames}
        onFavouriteToggle={handleFavouriteToggle}
      />
    </section>
  );
}
