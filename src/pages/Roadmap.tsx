"use client"

import { useState } from "react"
import { Map } from "lucide-react"
// import { Map, ChevronLeft, ChevronRight, Download, Calendar } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import RoadmapImage from "@/assets/roadmap.png"

export default function Roadmap() {
    // const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlide, _] = useState(0)

    // Mock PDF slides - in a real implementation, these would be actual PDF pages
    const roadmapSlides = [
        {
            id: 1,
            title: "ARX RTOS Roadmap Overview",
            description: "Strategic vision and development timeline for ARX RTOS",
            image: RoadmapImage,
        },
    ]

    // const nextSlide = () => {
    //     setCurrentSlide((prev) => (prev + 1) % roadmapSlides.length)
    // }

    // const prevSlide = () => {
    //     setCurrentSlide((prev) => (prev - 1 + roadmapSlides.length) % roadmapSlides.length)
    // }

    // const goToSlide = (index: number) => {
    //     setCurrentSlide(index)
    // }

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="ARX RTOS Roadmap" subtitle="Development Timeline & Future Plans" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Development Roadmap</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                                Explore our strategic development timeline and upcoming features for ARX RTOS. This roadmap outlines our
                                commitment to continuous innovation and ecosystem growth.
                            </p>
                        </div>

                        {/* PDF Slideshow */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <Map className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Roadmap Presentation</h2>
                            </div>

                            {/* Slideshow Container */}
                            <div className="relative">
                                {/* Main Slide Display */}
                                <div className="relative bg-slate-100 rounded-xl overflow-hidden mb-6">
                                    <div className="aspect-[4/3] relative">
                                        <img
                                            src={roadmapSlides[currentSlide].image || "/placeholder.svg"}
                                            alt={roadmapSlides[currentSlide].title}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Navigation Arrows */}
                                        {/* <button
                      onClick={prevSlide}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1 md:p-2 shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-slate-700" />
                    </button>

                    {/* Slide Counter */}
                                        {/*<div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/70 text-white px-2 py-1 rounded-lg text-xs md:text-sm">
                      {currentSlide + 1} / {roadmapSlides.length}
                    </div> */}
                                    </div>
                                </div>

                                {/* Slide Information */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{roadmapSlides[currentSlide].title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{roadmapSlides[currentSlide].description}</p>
                                </div>

                                {/* Download Button */}
                                {/* <div className="text-center">
                  <Button
                    onClick={() => window.open("/roadmap-presentation.pdf", "_blank")}
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Roadmap PDF
                  </Button>
                </div> */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}