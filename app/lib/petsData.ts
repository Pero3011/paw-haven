type categories = "Dog" | "Cat" | "Bird" | "Rabbit";

type gender = "Male" | "Female";

export interface PetCardData {
  id: string;
  category: categories;
  imgPath: string;
  isFavourite: boolean;
  name: string;
  age: string;
  gender: gender;
  address: string;
  characteristic: string;
  type: string;
  description: string;
  createdAt: string;
  isAdopted: boolean;
}

export interface PetDetailsData {
  PetId: string;
  AdFee: number;
  personality: string[];
  about: string;
  MedRecord: { med: string; status: boolean }[];
  RescueId: string;
}

export let pets: PetCardData[] = [
  {
    id: "pet-1",
    category: "Dog",
    imgPath:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    isFavourite: true,
    name: "Milo",
    age: "2 yrs",
    gender: "Male",
    address: "Sunnyvale Shelter",
    characteristic: "Friendly & Playful",
    type: "Golden Retriever",
    description:
      "Milo is a bundle of joy who loves afternoon fetch, belly rubs, and cuddles.",
    createdAt: "2026-03-01",
    isAdopted: false,
  },
  {
    id: "pet-2",
    category: "Cat",
    imgPath:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    isFavourite: false,
    name: "Luna",
    age: "1 yr",
    gender: "Female",
    address: "Downtown Haven",
    characteristic: "Gentle & Curious",
    type: "British Shorthair",
    description:
      "Gentle-spirited Luna adores watching birds from sunlit windowsills and purrs.",
    createdAt: "2026-03-05",
    isAdopted: false,
  },
  {
    id: "pet-3",
    category: "Rabbit",
    imgPath:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    isFavourite: true,
    name: "Oliver",
    age: "8 mos",
    gender: "Male",
    address: "Meadow Rescue",
    characteristic: "Quiet & Affectionate",
    type: "Lop Rabbit",
    description:
      "Oliver loves gentle head scratches and hops happily whenever you open the door.",
    createdAt: "2026-03-10",
    isAdopted: false,
  },
  {
    id: "pet-4",
    category: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    isFavourite: false,
    name: "Kiwi",
    age: "3 yrs",
    gender: "Female",
    address: "Valley Sanctuary",
    characteristic: "Social & Energetic",
    type: "Parrot",
    description:
      "Kiwi mimics pleasant whistle tunes and loves perching on shoulders during the day.",
    createdAt: "2026-02-15",
    isAdopted: false,
  },
  {
    id: "pet-5",
    category: "Dog",
    imgPath:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    isFavourite: true,
    name: "Daisy",
    age: "3 yrs",
    gender: "Female",
    address: "Oak Hills Haven",
    characteristic: "Loyal & Cheerful",
    type: "Beagle",
    description:
      "Daisy has a sweet temperament, loves outdoor nature walks, and is great with families.",
    createdAt: "2026-01-20",
    isAdopted: false,
  },
  {
    id: "pet-6",
    category: "Cat",
    imgPath:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    isFavourite: true,
    name: "Mochi",
    age: "6 mos",
    gender: "Male",
    address: "Riverside Center",
    characteristic: "Curious & Cuddly",
    type: "Tabby Cat",
    description:
      "Mochi loves pouncing on feather wands and curling up inside sweaters when sleepy.",
    createdAt: "2026-03-12",
    isAdopted: false,
  },
  {
    id: "pet-7",
    category: "Cat",
    imgPath:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
    isFavourite: false,
    name: "Coco",
    age: "1 yr",
    gender: "Female",
    address: "Pine Grove Shelter",
    characteristic: "Calm & Sweet",
    type: "Netherland Dwarf",
    description:
      "Coco is exceptionally gentle and tidy. Perfect for quiet apartment homes.",
    createdAt: "2026-02-01",
    isAdopted: false,
  },
  {
    id: "pet-8",
    category: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
    isFavourite: true,
    name: "Sunny",
    age: "2 yrs",
    gender: "Male",
    address: "Sky Haven",
    characteristic: "Playful & Talkative",
    type: "Parakeet",
    description:
      "Sunny greets every morning with cheerful chirps and brings sunshine to every day.",
    createdAt: "2026-02-28",
    isAdopted: false,
  },
];

export let petDetails: PetDetailsData[] = [
  {
    PetId: "pet-1",
    AdFee: 150,
    personality: ["Active", "Friendly", "Loyal", "Playful"],
    about:
      "Milo was found as a friendly stray and has been thriving in our shelter. He gets along great with kids and other dogs, loves running outdoors, and needs a home with an active family.",
    MedRecord: [
      { med: "Vaccinations", status: true },
      { med: "Neutered", status: true },
      { med: "Microchipped", status: true },
      { med: "Rabies Shot", status: true },
    ],
    RescueId: "RESCUE-101",
  },
  {
    PetId: "pet-2",
    AdFee: 120,
    personality: ["Calm", "Curious", "Independent", "Gentle"],
    about:
      "Luna is a quiet and sweet companion. She enjoys relaxing near warm spots and taking long naps in sunny corners. She is ideal for apartment living.",
    MedRecord: [
      { med: "Vaccinations", status: true },
      { med: "Spayed", status: true },
      { med: "Microchipped", status: true },
      { med: "Dewormed", status: true },
    ],
    RescueId: "RESCUE-102",
  },
  {
    PetId: "pet-3",
    AdFee: 80,
    personality: ["Quiet", "Gentle", "Affectionate"],
    about:
      "Oliver is a very gentle Lop Rabbit who loves eating fresh leafy greens and being petted on the head. He enjoys free-roaming in safe indoor spaces.",
    MedRecord: [
      { med: "Vaccinations", status: true },
      { med: "Neutered", status: true },
      { med: "Health Checkup", status: true },
    ],
    RescueId: "RESCUE-103",
  },
  {
    PetId: "pet-4",
    AdFee: 95,
    personality: ["Social", "Vocal", "Smart", "Energetic"],
    about:
      "Kiwi is a vibrant parrot with a big personality. She loves learning new tunes, interacting with people, and playing with colorful wooden toys.",
    MedRecord: [
      { med: "Avian Health Exam", status: true },
      { med: "Feather Check", status: true },
      { med: "Beak Trim", status: false },
    ],
    RescueId: "RESCUE-104",
  },
  {
    PetId: "pet-5",
    AdFee: 160,
    personality: ["Loyal", "Social", "Cheerful", "Gentle"],
    about:
      "Daisy is a loving Beagle who adores long sniffs on nature walks and spending quality time with humans. She is patient, great with children, and eager to please.",
    MedRecord: [
      { med: "Vaccinations", status: true },
      { med: "Spayed", status: true },
      { med: "Microchipped", status: true },
      { med: "Heartworm Test", status: true },
    ],
    RescueId: "RESCUE-105",
  },
  {
    PetId: "pet-6",
    AdFee: 110,
    personality: ["Playful", "Curious", "Cuddly", "Energetic"],
    about:
      "Mochi is a playful young tabby kitten with endless energy. After a fun session of chasing string toys, he will immediately purr and curl up right in your lap.",
    MedRecord: [
      { med: "First Vaccinations", status: true },
      { med: "Neutered", status: true },
      { med: "Dewormed", status: true },
    ],
    RescueId: "RESCUE-106",
  },
  {
    PetId: "pet-7",
    AdFee: 100,
    personality: ["Calm", "Sweet", "Tidy", "Gentle"],
    about:
      "Coco is an extraordinarily sweet dwarf rabbit who is litter-box trained and loves a calm, peaceful environment with plenty of hay and toys.",
    MedRecord: [
      { med: "Vaccinations", status: true },
      { med: "Spayed", status: true },
      { med: "Health Checkup", status: true },
    ],
    RescueId: "RESCUE-107",
  },
  {
    PetId: "pet-8",
    AdFee: 75,
    personality: ["Playful", "Talkative", "Cheerful"],
    about:
      "Sunny is a happy parakeet who brightens any room with his songs. He enjoys perched mirrors, swings, and eating fresh fruit treats.",
    MedRecord: [
      { med: "Avian Health Exam", status: true },
      { med: "Wing Clip", status: false },
    ],
    RescueId: "RESCUE-108",
  },
];