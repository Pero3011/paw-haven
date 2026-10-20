"use client";

import {
  CircleHelp,
  Heart,
  MapPin,
  PawPrint,
  Shield,
  Smile,
  Table,
  X,
  CheckCircle2,
} from "lucide-react";

import { getPetsDetails } from "@/app/lib/petDetails";

interface DetailsCardProps {
  petId: string;
  onClose: () => void;
}

export default function DetailsCard({ petId, onClose }: DetailsCardProps) {
  const pet = getPetsDetails(petId);

  // Fallback if no pet details are found
  if (!pet) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pet-details-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[48px] bg-white shadow-2xl grid lg:grid-cols-[2fr_3fr]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* LHS Pet Image Column */}
        <div className="bg-tertiary rounded-t-[48px] lg:rounded-tr-none lg:rounded-l-[48px] p-1">
          <div className="bg-white rounded-[40px] m-3 overflow-clip">
            <span className="flex justify-center p-2 bg-blue-100 font-body text-blue-600 font-bold text-sm">
              Pet Details
            </span>

            <div className="px-5 py-4">
              <h2 className="font-headline font-bold text-2xl text-gray-900">
                Meet {pet.name}!
              </h2>

              {/* Main Image Preview */}
              <div className="relative rounded-2xl overflow-clip my-3">
                <div className="h-72 w-full overflow-hidden bg-gray-100">
                  <img
                    src={pet.imgPath}
                    alt={pet.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                  <h3 className="text-2xl font-bold font-headline">
                    {pet.name}
                  </h3>
                  <span className="font-medium font-body text-sm text-gray-100">
                    {pet.type} • {pet.age} • {pet.gender}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <div className="my-3 text-xs font-body text-[#534439]">
                <span className="font-bold block mb-1">About {pet.name}:</span>
                <p className="line-clamp-3">{pet.about || pet.description}</p>
              </div>

              {/* Left Column Action Buttons */}
              <div className="w-full grid lg:grid-cols-2 lg:gap-3 items-center gap-2 font-medium text-xs font-headline my-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-2xl p-3 hover:bg-blue-700 transition"
                >
                  <PawPrint size={16} />
                  Adopt {pet.name}
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 border border-blue-600 rounded-2xl p-3 text-blue-600 hover:bg-blue-50 transition"
                >
                  <Table size={16} />
                  Schedule Meet & Greet
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center justify-center gap-2 my-2 font-body text-xs shadow-sm rounded-full p-2 bg-neutral-100 text-gray-700">
                <span className="block h-2 w-2 rounded-full bg-green-600"></span>
                <span>
                  Available for Meet & Greet{" "}
                  <span className="uppercase text-gray-500 font-semibold ml-1">
                    rescue id #{pet.RescueId || "8921"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RHS Details Column */}
        <div className="p-6 sm:p-10 flex flex-col justify-between">
          <div>
            {/* Top Bar Badges and Actions */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 text-xs font-body font-bold flex-wrap">
                <span className="flex items-center gap-1 bg-tertiary text-neutral px-3 py-1.5 rounded-full">
                  {pet.category || `${pet.type} • ${pet.age} • ${pet.gender}`}
                </span>
                <span className="flex items-center gap-1 bg-secondary text-[#354D31] px-3 py-1.5 rounded-full">
                  <Shield size={14} />
                  Fully Vetted
                </span>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  aria-label="Save to favorites"
                  className="shadow p-2 h-fit rounded-full hover:bg-red-50 transition"
                >
                  <Heart size={18} fill="red" color="red" />
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close dialog"
                  className="shadow p-2 h-fit rounded-full hover:bg-gray-100 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Content Info */}
            <div className="flex flex-col gap-5 mt-4">
              {/* Header Title & Fee */}
              <div>
                <div className="flex items-end justify-between">
                  <h1
                    id="pet-details-title"
                    className="font-headline text-4xl sm:text-[40px] text-text font-bold"
                  >
                    {pet.name}
                  </h1>
                  <span className="font-body font-bold text-neutral text-lg">
                    Adoption Fee: ${pet.AdFee}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center mt-1 text-sm">
                  <MapPin size={16} color="#8E4E14" className="shrink-0" />
                  <span className="text-[#534439]">
                    {pet.address} • Shelter Pen #{pet.RescueId || "14B"}
                  </span>
                </div>
              </div>

              {/* PERSONALITY & TEMPERAMENT */}
              <div>
                <label className="uppercase text-[13px] font-body font-bold text-text block mb-2">
                  Personality & Temperament
                </label>
                <div className="flex flex-wrap gap-2">
                  {pet.personality && pet.personality.length > 0 ? (
                    pet.personality.map((trait) => (
                      <span
                        key={trait}
                        className="flex items-center gap-1.5 bg-tertiary text-text px-3 py-1.5 rounded-full"
                      >
                        <Smile size={16} color="#8E4E14" />
                        <span className="font-body text-[13px] font-bold">
                          {trait}
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">
                      No personality traits listed.
                    </span>
                  )}
                </div>
              </div>

              {/* About the Pet */}
              <div>
                <label className="uppercase text-[13px] font-body font-bold text-text block mb-1">
                  About {pet.name}
                </label>
                <p className="text-[15px] sm:text-[16px] text-[#534439] leading-relaxed">
                  {pet.about || pet.description}
                </p>
              </div>

              {/* Health & Medical Record Card */}
              <div className="bg-tertiary rounded-3xl p-4 font-body">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-text text-[13px] font-bold uppercase">
                    Health & Medical Record
                  </h2>
                  <span className="text-[11px] font-bold text-[#4C6548]">
                    100% complete
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {pet.MedRecord && pet.MedRecord.length > 0 ? (
                    pet.MedRecord.map((record) => (
                      <div
                        key={record.med}
                        className="flex items-center gap-2 text-xs font-medium text-gray-800"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-emerald-700 shrink-0"
                        />
                        <span>{record.med}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-gray-500">
                      No medical records provided.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="grid lg:grid-cols-2 items-center gap-3 font-body text-[15px] font-bold mt-6">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-[#6F3800] hover:opacity-90 transition"
            >
              <Heart size={18} />
              Start Adoption (Simulated)
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-tertiary text-text hover:bg-amber-100/60 transition"
            >
              <CircleHelp size={18} />
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
