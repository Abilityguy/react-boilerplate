import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import {
  builtForItems,
  carouselSlides,
  type BuiltForItem,
} from "@/data/siteData";
import { useState, useEffect, type FC } from "react";

// Reusable FeatureItem Component with defined prop types
const FeatureItem: FC<{ item: BuiltForItem }> = ({
  item: { icon: Icon, label, color },
}) => (
  <div className="text-center group cursor-pointer">
    <div className="flex flex-col items-center space-y-3">
      <div
        className={`p-4 rounded-2xl bg-gradient-to-r ${color} group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-slate-200`}
      >
        <Icon className="w-8 h-8 text-slate-600 drop-shadow-sm" />
      </div>
      <div className="text-slate-700 font-semibold text-base group-hover:text-slate-900 transition-colors duration-300">
        {label}
      </div>
    </div>
  </div>
);

// Custom Hook for Carousel Logic
const useCarousel = (numSlides: number, intervalTime = 4000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [numSlides, intervalTime]);

  return currentSlide;
};

export default function HeroSection() {
  const currentSlide = useCarousel(carouselSlides.length);

  return (
    <main className="flex-1 text-center px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Accelerate Firmware Development
          </h1>

          <div className="max-w-4xl mx-auto space-y-1">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              ARX lets you design and develop firmware for ARM & RISC-V
              platforms.
            </p>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Leverage inbuilt libraries and multicore support to reduce
              time-to-market.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button className="flex-1 max-w-[200px] !bg-teal-600 hover:!bg-teal-700 !text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg rounded-xl !border-none">
              Download ARX
              <Download className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="flex-1 max-w-[200px] px-8 py-4 text-lg font-semibold border-2 border-slate-300 hover:bg-slate-50 hover:text-slate-700 hover:border-teal-500 transition-all duration-300 hover:scale-105 text-slate-700 bg-white rounded-xl shadow-lg hover:shadow-xl"
            >
              <Play className="mr-2 w-5 h-5" />
              Get Started
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center animate-in slide-in-from-bottom duration-1000 delay-300">
          <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 inline-block">
            <div className="relative overflow-hidden p-4 w-[720px] h-[360px]">
              {carouselSlides.map((slide, index) => {
                return (
                  <div
                    key={index}
                    className={`absolute top-4 left-5 transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <img
                      src={slide.imageSrc || "/placeholder.svg"}
                      alt={`ARX RTOS Feature ${index + 1}`}
                      className="w-[680px] h-80 object-cover rounded-xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-in slide-in-from-bottom duration-1000 delay-500">
          <h3 className="text-sm font-bold text-slate-600 tracking-widest uppercase">
            Built For
          </h3>
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:space-x-20 gap-8 md:gap-0">
            {builtForItems.map((item, index) => (
              <FeatureItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
