import {
  BriefcaseMedical,
  Earth,
  Headset,
  Heart,
  Home,
  ShieldCheck,
  Smile,
} from "lucide-react";

const GridContent = [
  {
    icon: Earth,
    title: "Find Your Match",
    description:
      "Browse our adorable companion profiles filter by personality and lifestyle, and discover furry friends ready to love.",
    bgColor: "#F4A261",
    textColor: "#8E4E14",
  },
  {
    icon: Smile,
    title: "Get to Know Them",
    description:
      "Explore their medical histories, foster backgrounds, and schedule a relaxed one-on-one virtual or in-person cuddle meet.",
    bgColor: "#A8C3A0",
    textColor: "#4C6548",
  },
  {
    icon: Home,
    title: "Start Your Journey",
    description:
      "Fill out our simplified adoption form, receiveour welcome care kit, and welcome your newest companion home forever!",
    bgColor: "#F4A261",
    textColor: "#251912",
  },
];

export default function HowAdoptionWorks() {
  return (
    <div className="bg-tertiary rounded-[48px] p-10 my-14">
      {/* Text Content */}
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <div className="flex items-center text-xs font-bold font-body gap-2 bg-secondary max-w-fit px-2 py-1 rounded-full text-[#526B4D] uppercase">
          <Heart size={16} />
          <span>Seamless Process</span>
        </div>
        <div>
          <h1 className="font-headline text-4xl font-medium pb-1">
            How Adoption Works
          </h1>
          <p className="text-sm text-gray-600">
            Simple, heartwarming, and guided every step of the way to ensure
            lifelong happiness for both of you.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 grid-cols-1 py-10 gap-5">
        {GridContent.map((cont, index) => {
          const ContentIcon = cont.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl">
              <div className="mb-4">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full font-headline font-bold text-xl"
                  style={{backgroundColor:cont.bgColor,color:cont.textColor}}
                >
                  {index + 1}
                </span>
              </div>

              <div className="flex items-center gap-2 pb-1">
                <ContentIcon color={cont.textColor} />
                <h2 className="font-headline font-semibold text-xl ">
                  {cont.title}
                </h2>
              </div>
              <p className="text-sm lg:max-w-75  text-gray-600">
                {cont.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Certifications */}
      <div className="flex items-center justify-around bg-white rounded-full py-2 font-body text-xs font-bold">
        <div className="flex items-center gap-1">
          <ShieldCheck color="#8E4E14" size={18} />
          <span>Vaccinated & Microchipped</span>
        </div>
        <div className="flex items-center gap-1">
          <BriefcaseMedical color="#8E4E14" size={18} />
          <span>Complimentary Vet Checkup</span>
        </div>
        <div className="flex items-center gap-1">
          <Headset color="#8E4E14" size={18} />
          <span>Lifetime Support Helpline</span>
        </div>
      </div>
    </div>
  );
}
