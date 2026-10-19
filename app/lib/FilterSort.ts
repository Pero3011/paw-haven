import type { PetCardData } from "@/app/lib/petsData";

export function filterSortPets(
  pets: PetCardData[],
  catParam: string,
  searchParam: string,
  sortParam: string,
): PetCardData[] {
  const search = searchParam.trim().toLowerCase();

  const filteredPets = pets.filter((pet) => {
    // Category filter
    const matchesCategory =
      catParam === "All Pets" ||
      pet.category.toLowerCase() === catParam.replace(/s$/, "").toLowerCase();

    // Search by name, breed/type, shelter/address, and description
    const searchableText = [
      pet.name,
      pet.type,
      pet.address,
      pet.characteristic,
      pet.description,
      pet.category,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(search);

    return matchesCategory && matchesSearch;
  });

  // Convert age strings such as "2 years" or "6 months" to months
  const getAgeInMonths = (age: string): number => {
    const match = age.toLowerCase().match(/(\d+(?:\.\d+)?)/);

    if (!match) return 0;

    const value = Number(match[1]);

    if (age.toLowerCase().includes("year")) {
      return value * 12;
    }

    if (age.toLowerCase().includes("week")) {
      return value / 4.345;
    }

    if (age.toLowerCase().includes("day")) {
      return value / 30.437;
    }

    return value;
  };

  // Sort without mutating the original pets array
  switch (sortParam) {
    case "Newest":
      filteredPets.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;

    case "Oldest":
      filteredPets.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
      break;

    case "Youngest Pet":
      filteredPets.sort(
        (a, b) => getAgeInMonths(a.age) - getAgeInMonths(b.age),
      );
      break;

    case "Oldest Pet":
      filteredPets.sort(
        (a, b) => getAgeInMonths(b.age) - getAgeInMonths(a.age),
      );
      break;

    case "Name (A-Z)":
      filteredPets.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return filteredPets;
}
