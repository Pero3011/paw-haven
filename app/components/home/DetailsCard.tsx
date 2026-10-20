import {
  CircleQuestionMark,
  Heart,
  MapPin,
  PawPrint,
  Shield,
  Smile,
  Table,
  X,
} from "lucide-react";

export default function DetailsCard() {
  return (
    <div className="grid lg:grid-cols-[2fr_3fr] rounded-[48px] bg-white max-w-5xl">
      {/*LHS Pet Image */}
      <div className="bg-tertiary rounded-l-[48px]">
        <div className="bg-white rounded-[48px] m-4 overflow-clip">
          <span className="flex justify-center p-2 bg-blue-200 font-body text-blue-500 font-bold">
            Pet Details
          </span>
          <div className="px-5 py-3">
            <h1 className="font-headline font-bold text-2xl">Meet Name!</h1>
            <div className="relative rounded-2xl overflow-clip my-3">
              {/* Image */}
              <div className="h-100 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-5 left-5 text-white">
                <h1 className="text-2xl font-bold font-headline">Milo</h1>
                <span className="font-medium font-body">
                  Type . Age . Gender
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full grid lg:grid-cols-2 lg:gap-5 lg:items-center gap-2  font-medium text-sm font-headline">
              <button className="flex items-center gap-2 bg-blue-600 text-white rounded-2xl p-3">
                <PawPrint size={18} />
                Adopt Name
              </button>
              <button className="flex items-center gap-2 border border-blue-600 rounded-2xl p-3 text-blue-600">
                <Table size={18} />
                Schedule Meet & Greet
              </button>
            </div>

            {/* Status Badge */}
            <div className="flex items-center justify-center gap-2 my-2 font-body shadow rounded-full p-2 bg-neutral-300">
              <span className="block h-2 w-2 rounded-full bg-green-700"></span>
              <span>
                Available for Meet & Greet{" "}
                <span className="uppercase text-neutral font-medium">
                  rescue id #8921
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* RHS Details */}
      <div className="p-10">
        {/* Badges and Settings */}
        <div className="flex justify-between">
          <div className="flex items-end gap-2 text-xs font-body font-bold">
            <span className="flex items-center gap-1 bg-tertiary text-neutral px-2 py-1 rounded-full">
              Type • Age • Gender
            </span>
            <span className="flex items-center gap-1 bg-secondary text-[#354D31] px-2 py-1 rounded-full">
              <Shield size={14} />
              Fully Vetted
            </span>
          </div>
          <div className="flex gap-2">
            <button className="shadow p-2 h-fit rounded-full">
              <Heart fill="red" color="red" />
            </button>

            <button className="shadow p-2 h-fit rounded-full">
              <X />
            </button>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-4">
          {/* Heading */}
          <div>
            <div className="flex items-end justify-between">
              <h1 className="font-headline text-[40px] text-text font-bold">
                Milo
              </h1>
              <span className="font-body font-bold text-neutral">
                Adoption Fee: $150
              </span>
            </div>
            <span className="flex gap-1.5 items-center">
              <MapPin size={16} color="#8E4E14" />
              <span className="text-[#534439]">
                Sunnyvale Haven Center • 2.4 miles away • Shelter Pen #14B
              </span>
            </span>
          </div>

          {/* PERSONALITY & TEMPERAMENT */}
          <div>
            <label className="uppercase text-[13px] font-body font-bold text-[#251912]">
              Personality & Temperament
            </label>
            <div>
              <span className="flex items-center max-w-fit gap-1 bg-tertiary text-[#251912] px-2 py-1 rounded-full">
                <Smile size={16} color="#8E4E14" />
                <span className="font-body text-[13px] font-bold">
                  Friendly & Playful
                </span>
              </span>
            </div>
          </div>

          {/* About the Pet */}
          <div>
            <label className="uppercase text-[13px] font-body font-bold text-text">
              About Name
            </label>
            <p className="text-[16px] text-[#534439]">
              Milo is a vibrant, affectionate Golden Retriever who loves morning
              walks, game of fetch, and belly rubs. He was rescued during an
              autumn storm and has blossomed into the gentlest soul ready for
              his forever human. He enjoys gentle snoozes by the patio and gets
              along effortlessly with fellow pups.
            </p>
          </div>

          {/* Health & Medical Record */}
          <div className="bg-tertiary rounded-4xl p-4 font-body">
            <div className="flex items-center justify-between">
              <h2 className="text-text text-[13px] font-bold">
                Health & Medical Record
              </h2>
              <span className="text-[11px] text-[#4C6548]">100% complete</span>
            </div>
            <div></div>
          </div>

          {/* Buttons */}
          <div className="grid lg:grid-cols-2 items-center gap-2 font-body text-[15px] font-bold">
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-[#6F3800] scale-100">
              <Heart />
              Start Adoption (Simulated)
            </button>
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-tertiary text-text">
              <CircleQuestionMark />
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
