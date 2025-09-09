import { Search, User, Mail } from "lucide-react";
import arxLogo from "@/assets/logo2.png";

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({ onSearchClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-4">
        <div>
          <div className="text-xl md:text-2xl font-black text-slate-900">
            ARX RTOS
          </div>
          <div className="text-xs md:text-sm italic text-slate-500 font-medium">
            Lightweight | Deterministic | Scalable
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={arxLogo}
          alt="ARX Logo"
          className="w-20 h-20" // Add any Tailwind CSS classes for styling
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              (window.location.href = "mailto:contact@arx-rtos.com")
            }
            className="p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 group shadow-sm hover:shadow-md"
            aria-label="Contact us"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
          </button>
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 group shadow-sm hover:shadow-md"
            aria-label="Search"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
          </button>
          <button
            className="p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 group shadow-sm hover:shadow-md"
            aria-label="User account"
          >
            <User className="w-4 h-4 md:w-5 md:h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}
