"use client";

import {
  Search,
  Dog,
  Cat,
  Bird,
  Rabbit,
  Grip,
  ArrowUpDown,
} from "lucide-react";

const categories = [
  { logo: Grip, title: "All Pets" },
  { logo: Dog, title: "Dogs" },
  { logo: Cat, title: "Cats" },
  { logo: Bird, title: "Birds" },
  { logo: Rabbit, title: "Rabbits" },
];

const sorts = ["Newest", "Oldest", "Youngest Pet", "Oldest Pet", "Name (A-Z)"];

interface FilterBarProps {
  sortParam: string;
  onSortChange: (newSort: string) => void;

  catParam: string;
  onCatChange: (newCat: string) => void;

  searchParam: string;
  onSearchChange: (newSearch: string) => void;

  availableCount: number;
}

export default function FilterBar({
  sortParam,
  onSortChange,
  catParam,
  onCatChange,
  searchParam,
  onSearchChange,
  availableCount,
}: FilterBarProps) {
  // Cycle through the available sorting options
  const handleSorts = () => {
    const currentIndex = sorts.indexOf(sortParam);

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % sorts.length;

    onSortChange(sorts[nextIndex]);
  };

  // Update the selected category
  const handleCats = (category: string) => {
    onCatChange(category);
  };

  return (
    <div className="relative isolate">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 my-4 p-4 bg-white rounded-2xl shadow-sm">
        {/* Search Bar */}
        <div className="w-full xl:w-80 h-11 flex items-center bg-tertiary rounded-full gap-2 px-4 shrink-0">
          <Search size={20} className="text-neutral shrink-0" />

          <input
            type="text"
            value={searchParam}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search pets by name, breed, shelter..."
            aria-label="Search pets by name, breed, or shelter"
            className="w-full min-w-0 bg-transparent outline-none text-sm placeholder:text-gray-400"
          />
        </div>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0 scrollbar-none -mx-2 px-2">
          {categories.map((cat) => {
            const CategoryIcon = cat.logo;
            const isTarget = cat.title === catParam;

            return (
              <button
                type="button"
                onClick={() => handleCats(cat.title)}
                key={cat.title}
                aria-pressed={isTarget}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                  isTarget ? "bg-primary font-bold" : "hover:bg-primary/50"
                }`}
              >
                <CategoryIcon size={18} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Sorting and Available Count */}
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 shrink-0">
          {/* Sort Button */}
          <button
            type="button"
            onClick={handleSorts}
            aria-label={`Current sort: ${sortParam}. Click to change sorting`}
            className="flex items-center gap-2 bg-tertiary py-2.5 px-4 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowUpDown size={16} />

            <span className="text-gray-600">Sort by:</span>

            <span className="text-neutral font-semibold">{sortParam}</span>
          </button>

          {/* Available Pets Count */}
          <div
            className="bg-tertiary py-2.5 px-4 rounded-full text-sm"
            aria-live="polite"
          >
            <span className="text-gray-600">Available: </span>

            <span className="text-neutral font-semibold">{availableCount}</span>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-secondary opacity-40 -top-20 -left-20 pointer-events-none -z-10 blur-2xl" />
    </div>
  );
}
