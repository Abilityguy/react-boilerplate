import Header from "@/Header";
import Hero from "@/Hero";
import Footer from "@/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 font-sans min-h-screen">
      {/* Header */}
      <Header onSearchClick={() => setShowSearchModal(true)} />
      {showSearchModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Search ARX Documentation
              </h3>
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
              Popular searches: Real-time scheduling, Memory management,
              Multi-core support
            </div>
          </div>
        </div>
      )}

      <Hero />
      <Footer />
    </div>
  );
}
