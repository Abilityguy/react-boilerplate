"use client"

import { Shield, Eye, Database, Mail, LockKeyhole } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Privacy() {
    const privacyPrinciples = [
        {
            icon: Eye,
            title: "Minimal Data Collection",
            description:
                "We do not collect personal data when you browse this website, except information you choose to provide",
            color: "bg-blue-100 text-blue-600",
        },
        {
            icon: Database,
            title: "Analytics & Performance",
            description: "Basic analytics may be used to improve website performance, without identifying individual users",
            color: "bg-green-100 text-green-600",
        },
        {
            icon: LockKeyhole,
            title: "No Third-Party Sharing",
            description: "We do not sell or share your information with third parties, except where required by law",
            color: "bg-purple-100 text-purple-600",
        },
    ]

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="Privacy Policy" subtitle="How We Protect Your Privacy" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                At ARX Inc, we respect your privacy and are committed to protecting your personal information
                            </p>
                        </div>

                        {/* Privacy Commitment */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <Shield className="w-5 h-5 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Our Privacy Commitment</h2>
                            </div>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                We believe in transparency about how we collect, use, and protect your information. This policy explains
                                our practices and your rights regarding your personal data.
                            </p>
                        </div>

                        {/* Privacy Principles */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Principles</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {privacyPrinciples.map((principle, index) => {
                                    const IconComponent = principle.icon
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-6 hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className={`p-3 rounded-xl ${principle.color} w-fit mb-4`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-3">{principle.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{principle.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Detailed Privacy Information */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Details</h2>

                            <div className="space-y-6 text-slate-700 leading-relaxed">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Information We Collect</h3>
                                    <p>
                                        If you contact us (e.g., for support, careers, or partnerships), we may store your details only for
                                        communication purposes. We do not collect personal information during regular website browsing.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">How We Use Information</h3>
                                    <p>
                                        Any information you provide is used solely to respond to your inquiries and provide the services you
                                        request. We do not use your information for marketing purposes without your explicit consent.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Data Retention</h3>
                                    <p>
                                        We retain your information only as long as necessary to fulfill the purposes for which it was
                                        collected or as required by law.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Your Rights</h3>
                                    <p>
                                        You may request deletion of your data at any time by contacting us. We will respond to your request
                                        within a reasonable timeframe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact for Privacy */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Mail className="w-5 h-5 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Privacy Questions?</h2>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    For privacy-related questions or to request deletion of your data, contact us at:
                                </p>

                                <Button
                                    onClick={() => (window.location.href = "mailto:privacy@arxos.in")}
                                    className="bg-teal-600 hover:bg-teal-700 text-lg text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    privacy@arxos.in
                                </Button>

                                <p className="text-sm text-slate-500 mt-4">
                                    For more details, please review our full Privacy Policy document (coming soon)
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}