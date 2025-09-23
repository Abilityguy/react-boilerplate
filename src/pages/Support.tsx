"use client"

import { HeadphonesIcon, BookOpen, Users, Mail, Shield, Zap, GraduationCap, Wrench } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Support() {
    const supportServices = [
        {
            icon: Users,
            title: "Community Support",
            description: "Access to documentation, discussion forums, and GitHub issue tracking",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: HeadphonesIcon,
            title: "Priority Support",
            description: "Dedicated email and response SLAs for commercial partners",
            color: "bg-teal-100 text-teal-600",
        },
        {
            icon: Shield,
            title: "Bug Fixes & Updates",
            description: "Regular patches and security updates",
            color: "bg-green-100 text-green-600",
        },
    ]

    const trainingPrograms = [
        {
            icon: BookOpen,
            title: "Getting Started with ARX",
            description: "Installation, build, and first application",
            color: "bg-purple-100 text-purple-600",
        },
        {
            icon: Zap,
            title: "Advanced RTOS Concepts",
            description: "Scheduling, synchronization, and inter-process communication",
            color: "bg-orange-100 text-orange-600",
        },
        {
            icon: Wrench,
            title: "Device Driver Development",
            description: "Writing and integrating drivers with ARX HAL",
            color: "bg-red-100 text-red-600",
        },
        {
            icon: GraduationCap,
            title: "Porting Workshop",
            description: "Adapting ARX to new architectures and boards",
            color: "bg-indigo-100 text-indigo-600",
        },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="Support & Training" subtitle="Get Help & Learn ARX RTOS" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Support & Training</h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                                At ARX Inc, we are committed to helping developers and organizations succeed with ARX RTOS. Whether you
                                are evaluating the system, integrating it into a product, or looking for long-term support, we provide
                                services tailored to your needs.
                            </p>
                        </div>

                        {/* Support Services */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <HeadphonesIcon className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Support Services</h2>
                            </div>

                            {/* Responsive grid for smaller screens */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {supportServices.map((service, index) => {
                                    const IconComponent = service.icon
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className={`p-3 rounded-xl ${service.color} w-fit mb-4`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Training Programs */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Training Programs</h2>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 md:p-8 mb-8">
                                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                    We offer structured programs for individuals and teams:
                                </p>

                                {/* Responsive grid for smaller screens */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {trainingPrograms.map((program, index) => {
                                        const IconComponent = program.icon
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                                            >
                                                <div className={`p-3 rounded-lg ${program.color} flex-shrink-0`}>
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 mb-2">{program.title}</h3>
                                                    <p className="text-slate-600 leading-relaxed">{program.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Mail className="w-5 h-5 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    For commercial support packages or training inquiries:
                                </p>

                                {/* Responsive button sizing */}
                                <Button
                                    onClick={() => (window.location.href = "mailto:support@arxos.in")}
                                    className="bg-teal-600 hover:bg-teal-700 text-lg text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    support@arxos.in
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}