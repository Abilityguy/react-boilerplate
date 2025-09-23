"use client"

import { Calendar, Tag, ExternalLink } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Changelog() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="ARX RTOS Changelog" subtitle="Release History & Updates" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Changelog</h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Track the latest updates, features, and improvements to ARX RTOS
                            </p>
                        </div>

                        {/* Current Release */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <Tag className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Current Release</h2>
                                    <p className="text-slate-600">Latest stable version</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-teal-600 text-white px-4 py-2 rounded-lg font-bold text-lg">Version: v1.0.0</div>
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>Release Date: 2025-09-01</span>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-slate-900 mb-3">Release Highlights</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Initial stable release of ARX RTOS</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Multi-core support for ARM and RISC-V platforms</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Real-time scheduling and memory management</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></span>
                                            <span>Comprehensive API documentation and examples</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Full Release History */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <ExternalLink className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Full Release History</h2>
                                    <p className="text-slate-600">Complete changelog and detailed release notes</p>
                                </div>
                            </div>

                            <div className="text-center py-8">
                                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                    For full release history and detailed changelogs, please visit our GitHub Releases page
                                </p>

                                {/* Adjusted button sizing for mobile */}
                                <Button
                                    onClick={() => window.open("https://github.com/arxinc/arxrtos/releases", "_blank")}
                                    className="bg-slate-900 hover:bg-slate-800 text-lg text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    View GitHub Releases
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}