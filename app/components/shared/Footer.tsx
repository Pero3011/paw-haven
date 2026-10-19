import { Camera, Earth, Share } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF0E6] text-amber-950 py-12 px-6">
      {/* Top Section: Grid of 4 Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Column 1: Brand & Socials */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Paw Haven Logo" className="w-8 h-8" />
            <h2 className="text-xl font-headline font-bold text-amber-900">Paw Haven</h2>
          </div>
          <p className="text-sm text-stone-600 mb-6">
            Connecting gentle hearts with loving companions. We are an
            empathetic network nurturing rescue animals and guiding families to
            life-changing adoptions.
          </p>
          <div className="flex gap-3">
            {/* Round Social Buttons */}
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Share/>
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Camera/>
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Earth/>
            </button>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <a href="#">Search Available Pets</a>
            </li>
            <li>
              <a href="#">Adoption Process</a>
            </li>
            <li>
              <a href="#">Foster Care</a>
            </li>
            <li>
              <a href="#">Volunteer Opportunities</a>
            </li>
            <li>
              <a href="#">Support Our Shelter</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <a href="#">Pet Care Guides</a>
            </li>
            <li>
              <a href="#">Veterinary Partners</a>
            </li>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Our Mission & Team</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Join Our Pack</h3>
          <p className="text-sm text-stone-600 mb-4">
            Receive weekly adoption stories, upcoming adoption fairs, and
            heartwarming rescue updates directly to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full bg-white text-sm outline-none grow"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-[#46624c] text-white text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section: Copyright Notice */}
      <div className="text-center text-xs text-stone-500 pt-6 border-t border-stone-200/40">
        © 2026 Paw Haven. Made with love and paw prints.
      </div>
    </footer>
  );
}
