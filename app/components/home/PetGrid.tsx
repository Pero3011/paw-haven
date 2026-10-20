import type { PetCardData } from "@/app/lib/petsData";
import PetCard from "./PetCard";

interface PetGridProps {
  pets: PetCardData[];
  favouriteNames: string[];
  onFavouriteToggle: (name: string) => void;
  onMeet: (petId: string) => void;
}

export default function PetGrid({
  pets,
  favouriteNames,
  onFavouriteToggle,
  onMeet
}: PetGridProps) {
  if (pets.length === 0) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold text-gray-800">No pets found</h2>
        <p className="mt-2 text-sm text-gray-500">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          {...pet}
          isFavourite={favouriteNames.includes(pet.name)}
          onFavouriteChange={() => onFavouriteToggle(pet.name)}
          onMeet={() => onMeet(pet.id)}
        />
      ))}
    </div>
  );
}
