"use client";

import type { PetCardData } from "@/app/lib/petsData";
import { Heart, MapPin, PawPrint } from "lucide-react";

interface PetCardProps extends PetCardData {
  isFavourite: boolean;
  onFavouriteChange: () => void;
}

export default function PetCard({
  category,
  imgPath,
  name,
  age,
  gender,
  address,
  characteristic,
  type,
  description,
  isFavourite,
  onFavouriteChange,
}: PetCardProps) {
  return (
    <div className="relative max-w-sm overflow-hidden rounded-[36px] bg-white shadow-sm">
      {/* Overlay badges */}
      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between">
        <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-gray-800 backdrop-blur-sm">
          {category}
        </span>

        <button
          type="button"
          onClick={onFavouriteChange}
          aria-label={
            isFavourite
              ? `Remove ${name} from favorites`
              : `Add ${name} to favorites`
          }
          aria-pressed={isFavourite}
          className="rounded-full bg-white/90 p-2.5 text-gray-700 transition-colors hover:text-red-500"
        >
          <Heart
            size={18}
            className={isFavourite ? "fill-red-500 text-red-500" : ""}
          />
        </button>
      </div>

      {/* Pet Image */}
      <div className="h-64 w-full overflow-hidden">
        <img src={imgPath} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Content Area */}
      <div className="space-y-3 p-6">
        {/* Header */}
        <div className="flex items-baseline justify-between font-headline">
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>

          <span className="text-sm font-bold text-neutral">
            {age} <span className="mx-1">•</span> {gender}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin size={16} />
          <span>{address}</span>
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 pt-1">
          <span className="rounded-full bg-[#DCECD8] px-3 py-1.5 text-xs font-semibold text-[#2C5E2E]">
            {characteristic}
          </span>

          <span className="rounded-full bg-[#FCECE4] px-3 py-1.5 text-xs font-semibold text-neutral">
            {type}
          </span>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Button */}
        <div className="pt-2">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FCECE4] px-4 py-3 text-sm font-bold text-[#2D1A0E] transition-colors hover:bg-[#f8ded1]"
          >
            <span>Meet {name}</span>
            <PawPrint size={16} className="fill-current" />
          </button>
        </div>
      </div>
    </div>
  );
}
