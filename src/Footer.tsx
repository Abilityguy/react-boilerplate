import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 px-4 md:px-8 py-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-8 md:gap-32 mb-8">
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wide">
                            PRODUCT
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/documentation" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="/changelog" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Changelog
                                </Link>
                            </li>
                            <li>
                                <Link to="/roadmap" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Roadmap
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wide">
                            COMPANY
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/careers" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Support & Training
                                </Link>
                            </li>
                            <li>
                                <Link to="/partners" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wide">
                            LEGAL
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/terms" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-slate-600 hover:text-teal-600 transition-all duration-200 text-sm hover:translate-x-1">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-slate-900 mb-4 text-sm tracking-wide">
                            SOCIALS
                        </h4>
                        <div className="flex gap-3 justify-center md:justify-start">
                            <a
                                href="https://github.com/arxinc?tab=repositories"
                                className="w-8 h-8 rounded-lg bg-gray-400 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    className="text-white group-hover:text-white transition-colors duration-300"
                                >
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>
                            {/* LinkedIn Icon */}
                            <a
                                href="https://github.com/arxinc?tab=repositories"
                                className="w-8 h-8 rounded-lg bg-gray-400 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-white group-hover:text-white transition-colors duration-300"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-slate-500 text-sm border-t border-slate-200 pt-4">
                    Copyright © 2025 by ARX Inc. Bangalore. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
