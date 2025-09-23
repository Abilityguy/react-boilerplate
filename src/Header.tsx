import { Search, User, Mail, ArrowLeft } from "lucide-react";
import arxLogo from "@/assets/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    showBackButton?: boolean
    title?: string
    subtitle?: string
}

export default function Header({
    showBackButton = false,
    title = "ARX RTOS",
    subtitle = "Lightweight | Deterministic | Scalable"

}: HeaderProps) {
    const [showSearchModal, setShowSearchModal] = useState(false)

    return (
        <>
            <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
                <div className="flex items-center gap-2 md:gap-4">
                    {showBackButton && (
                        <Link
                            to="/"
                            className="p-2 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 group"
                        >
                            <ArrowLeft className="w-5 h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
                        </Link>
                    )}
                    <div>
                        <div className="text-xl md:text-2xl font-black text-slate-900">{title}</div>
                        <div className="text-xs md:text-sm text-slate-500 font-medium">{subtitle}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <img
                        src={arxLogo}
                        alt="ARX Logo"
                        className="w-12 h-12 md:w-20 md:h-20"
                    />
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() =>
                                (window.location.href = "mailto:contact@arxos.in")
                            }
                            className="p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-110 group shadow-sm hover:shadow-md"
                            aria-label="Contact us"
                        >
                            <Mail className="w-4 h-4 md:w-5 md:h-5 text-slate-600 group-hover:text-teal-600 transition-colors" />
                        </button>
                        {/* <button
              onClick={() => setShowSearchModal(true)}
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
            </button> */}
                    </div>
                </div>
            </header>

            {/* {showSearchModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Search ARX Documentation</h3>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-slate-400 hover:text-slate-600 text-2xl"
              >
                ×
              </button>
            </div>
            <input
              type="text"
              placeholder="Search features, APIs, examples..."
              className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              autoFocus
            />
            <div className="mt-4 text-sm text-slate-500">
              Popular searches: Real-time scheduling, Memory management, Multi-core support
            </div>
          </div>
        </div>
      )} */}
        </>
    );
}
