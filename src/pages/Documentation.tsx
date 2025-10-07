import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Header from "@/Header";
import PageTransition from "@/components/page-transition";

export default function Documentation() {
    const documents = [
        {
            id: "1",
            title: "ARXOS Overview",
            description: "High-level introduction, features, and architecture of ARXOS.",
            filename: "/documents/arxos.pdf",
        },
        {
            id: "2",
            title: "ARX Release Package",
            description: "Detailed information on version changes, improvements, and bug fixes.",
            filename: "/documents/arx_package_structure.pdf",
        },
        {
            id: "3",
            title: "Environment Setup Guide",
            description: "Guide to installing necessary toolchains, IDEs, QEMU, and other prerequisites.",
            filename: "/documents/arx_env_setup.pdf",
        },
        {
            id: "4",
            title: "Build & Configuration Guide",
            description: "Step-by-step instructions to configure and build ARXOS for specific hardware targets.",
            filename: "/documents/arx_build_config.pdf",
        },
        {
            id: "5",
            title: "ARXOS API Reference",
            description: "Comprehensive API documentation for application developers.",
            filename: "/documents/arx_api_manual.pdf",
        },
        {
            id: "6",
            title: "ARX HAL Guide",
            description: "Details on the Hardware Abstraction Layer for ARXOS.",
            filename: "/documents/arx_hal_guide.pdf",
        },
        {
            id: "7",
            title: "Porting Guide",
            description: "Steps for porting ARXOS to new boards and architectures.",
            filename: "/documents/arx_porting_guide.pdf",
        },
        {
            id: "8",
            title: "Debugging Guide",
            description: "Debugging methodologies, tools, and best practices for ARXOS development.",
            filename: "/documents/arx_debugging_guide.pdf",
        },
        {
            id: "9",
            title: "Coding Standard",
            description: "Guidelines and best practices for writing clean, consistent, and maintainable code.",
            filename: "/documents/arx_coding_standards.pdf",
        },
        {
            id: "10",
            title: "Release Archive",
            description: "Access to previous versions, release notes, and documentation for historical reference.",
            filename: "/documents/arx_rlz_archive.pdf",
        },
    ]

    const openPDF = (filename: string) => {
        window.open(`${filename}`, "_blank")
    }

    return (
        <PageTransition>
            <Header showBackButton={true} title="ARX RTOS Documentation" subtitle="Technical Documentation & Guides" />

            <main className="px-4 md:px-8 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Documentation Library</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Access comprehensive guides, API references, and technical documentation for ARX RTOS
                        </p>
                    </div>

                    {/* Use a grid with two columns on medium screens and up */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {documents.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-4 sm:p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-teal-100 rounded-xl">
                                        <FileText className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.title}</h3>
                                        <p className="text-slate-600 mb-4 leading-relaxed">{doc.description}</p>
                                        <Button
                                            onClick={() => openPDF(doc.filename)}
                                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                                        >
                                            <FileText className="w-4 h-4 mr-2" />
                                            View PDF
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </PageTransition>
    );
};