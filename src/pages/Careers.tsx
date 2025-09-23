"use client"

import { Briefcase, Users, GraduationCap, MapPin, Clock } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Careers() {
    const jobOpenings = [
        {
            id: 1,
            title: "Senior Engineer",
            department: "Engineering",
            location: "Bangalore, India",
            type: "Full-time",
            description: "Lead development of real-time kernel features and optimization for different platforms.",
        },
        {
            id: 2,
            title: "Embedded Systems Developer",
            department: "Engineering",
            location: "Bangalore, India",
            type: "Full-time",
            description: "",
        },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="ARX Careers" subtitle="Join Our Team" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Careers at ARX Inc</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                                At ARX Inc, we are building the next generation of real-time operating systems to power innovation in
                                embedded systems, IoT, storage, and future hardware platforms.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <Users className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                            </div>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We are always looking for passionate individuals who are eager to solve complex system challenges and
                                contribute to open-source and commercial RTOS development.
                            </p>
                        </div>

                        {/* Current Openings */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Current Openings</h2>
                            </div>

                            <div className="grid gap-6">
                                {jobOpenings.map((job) => (
                                    <div key={job.id} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                                                <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                                                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                                    <div className="flex items-center gap-1">
                                                        <Briefcase className="w-4 h-4" />
                                                        <span>{job.department}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Responsive button for mobile. It will fill the width on small screens and be auto on medium and up. */}
                                            <Button disabled className="w-full md:w-auto bg-slate-300 text-slate-500 cursor-not-allowed px-6 py-2 rounded-xl">
                                                Apply (Coming Soon)
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programs */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Internship Programs */}
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <GraduationCap className="w-5 h-5 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Internship Programs</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Gain hands-on experience with cutting-edge RTOS development and embedded systems programming.
                                </p>
                                <Button disabled className="w-full bg-slate-300 text-slate-500 cursor-not-allowed px-6 py-2 rounded-xl">
                                    Apply (Coming Soon)
                                </Button>
                            </div>

                            {/* Graduate Trainee */}
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <Users className="w-5 h-5 text-purple-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Graduate Trainee Opportunities</h2>
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Structured training program for recent graduates to develop expertise in real-time systems.
                                </p>
                                <Button disabled className="w-full bg-slate-300 text-slate-500 cursor-not-allowed px-6 py-2 rounded-xl">
                                    Apply (Coming Soon)
                                </Button>
                            </div>
                        </div>

                        {/* Note */}
                        <div className="mt-12 text-center">
                            <div className="bg-slate-100 rounded-xl p-4 sm:p-6">
                                <p className="text-slate-600 font-medium">
                                    All application processes are currently being set up. Please check back soon for active applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}