type categories = "Dog" | "Cat" | "Bird" | "Rabbit";

type gender = "Male" | "Female";

export interface PetCardData {
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
}

export let pets: PetCardData[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    category: "Rabbit",
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
  },
  {
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
  },
];
