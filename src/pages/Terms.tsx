import { Scale, AlertCircle, Mail } from "lucide-react"
import Header from "@/Header"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"

export default function Terms() {
    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50">
                <Header showBackButton={true} title="Terms & Conditions" subtitle="Legal Terms & Usage Guidelines" />

                <main className="px-4 md:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Please read these terms carefully before using ARX RTOS or accessing our services
                            </p>
                        </div>

                        {/* Terms Content */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Scale className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Usage Terms</h2>
                            </div>

                            <div className="space-y-6 text-slate-700 leading-relaxed">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Agreement to Terms</h3>
                                    <p>
                                        By using this website, downloading ARX RTOS, or accessing related materials, you agree to the
                                        following terms and conditions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Software License</h3>
                                    <p>
                                        The software is provided under the ARX Inc License. All rights, title, and interest in and to the
                                        software remain with ARX Inc.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Permitted Use</h3>
                                    <p>
                                        Documentation, binaries, and source code are intended for evaluation and development purposes only,
                                        unless otherwise agreed in writing with ARX Inc.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Redistribution and Commercial Use</h3>
                                    <p>
                                        Redistribution and commercial use are subject to the conditions stated in the license agreement.
                                        Please contact us for commercial licensing terms.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Updates to Terms</h3>
                                    <p>
                                        ARX Inc reserves the right to update or change these terms at any time. Continued use of the
                                        software constitutes acceptance of any changes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Important Notice */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-6 mb-8">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2">Important Notice</h3>
                                    <p className="text-amber-800 leading-relaxed">
                                        For the complete and legally binding terms, please refer to our full Terms & Conditions document
                                        included with the software distribution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-slate-100 rounded-lg">
                                    <Mail className="w-5 h-5 text-slate-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Questions about Terms?</h2>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                    If you have questions about these terms or need clarification, please contact us.
                                </p>

                                <Button
                                    onClick={() => (window.location.href = "mailto:legal@arxos.in")}
                                    className="bg-slate-600 hover:bg-slate-700 text-lg text-white px-6 py-2 md:px-8 md:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    legal@arxos.in
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}