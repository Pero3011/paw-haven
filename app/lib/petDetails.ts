import {
  pets,
  petDetails,
  type PetCardData,
  type PetDetailsData,
} from "./petsData";

export type CombinedPetData = PetCardData & PetDetailsData;

export function getPetsDetails(petId: string): CombinedPetData | null {
  const mainData = pets.find((pet) => pet.id === petId);
  const detailsData = petDetails.find((pet) => pet.PetId === petId);

  if (!mainData || !detailsData) {
    return null;
  }

  return {
    ...mainData,
    ...detailsData,
  };
}
