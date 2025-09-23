"use client"

import { Handshake, Cpu, Code, GraduationCap, Shield, Mail } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Partners() {
    const collaborationAreas = [
        {
            icon: Cpu,
            title: "Hardware boards & evaluation kits",
            description: "Partner with us to create development boards and evaluation platforms for ARX RTOS",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Code,
            title: "Embedded toolchains, IDEs, and debugging solutions",
            description: "Integrate ARX RTOS support into development tools and debugging environments",
            color: "bg-teal-100 text-teal-600",
        },
        {
            icon: GraduationCap,
            title: "Training, education, and academic research programs",
            description: "Collaborate on educational initiatives and research projects in real-time systems",
            color: "bg-purple-100 text-purple-600",
        },
        {
            icon: Shield,
            title: "Functional safety and compliance standards",
            description: "Collaboration with industry partners for functional safety and compliance standards like the IEC 61508, ISO 26262, DO-178C, IEC 62304",
            color: "bg-green-100 text-green-600",
        },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="Partners" subtitle="Building the ARX Ecosystem Together" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Partners</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                                At ARX Inc, we believe in building strong partnerships with silicon vendors, OEMs, research institutes,
                                and solution providers to grow the ARX ecosystem.
                            </p>
                        </div>

                        {/* Partnership Vision */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <Handshake className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Our Partnership Vision</h2>
                            </div>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We are actively exploring collaborations in the areas of hardware innovation, development tools,
                                education, and industry standards to create a comprehensive ecosystem around ARX RTOS.
                            </p>
                        </div>

                        {/* Collaboration Areas */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Code className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Collaboration Areas</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {collaborationAreas.map((area, index) => {
                                    const IconComponent = area.icon
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className={`p-3 rounded-xl ${area.color} w-fit mb-4`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{area.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Partnership Benefits */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Partner with ARX Inc?</h2>
                            {/* Removed text-center on mobile to align with the rest of the page */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center md:text-left">
                                    <div className="p-4 bg-teal-100 rounded-xl w-fit mx-auto md:mx-0 mb-4">
                                        <Shield className="w-8 h-8 text-teal-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Industry Expertise</h3>
                                    <p className="text-slate-600">Deep knowledge in real-time systems and embedded development</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="p-4 bg-blue-100 rounded-xl w-fit mx-auto md:mx-0 mb-4">
                                        <Code className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Open Innovation</h3>
                                    <p className="text-slate-600">Commitment to open-source development and community collaboration</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="p-4 bg-purple-100 rounded-xl w-fit mx-auto md:mx-0 mb-4">
                                        <GraduationCap className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">Future-Ready</h3>
                                    <p className="text-slate-600">Building solutions for next-generation hardware platforms</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact for Partnership */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Mail className="w-5 h-5 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Interested in partnering?</h2>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    If your organization would like to collaborate with us, please reach out at:
                                </p>

                                <Button
                                    onClick={() => (window.location.href = "mailto:partners@arxos.in")}
                                    className="bg-teal-600 hover:bg-teal-700 text-lg text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    partners@arxos.in
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}