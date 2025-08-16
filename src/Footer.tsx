export default function Footer() {
    return (
        <footer className="bg-gray-200 text-gray-700 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-sm">
                    {/* Product Column */}
                    <div>
                        <h4 className="font-semibold mb-2 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Changelog</a></li>
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>
                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold mb-2 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Support & Training</a></li>
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Partners</a></li>
                        </ul>
                    </div>
                    {/* Legal Column */}
                    <div>
                        <h4 className="font-semibold mb-2 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Socials Column */}
                    <div>
                        <h4 className="font-semibold mb-2 uppercase tracking-wider">Socials</h4>
                        <div className="flex space-x-4">
                            {/* X (Twitter) Icon */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-gray-400 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-white group-hover:text-white transition-colors duration-300">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </a>
                            {/* LinkedIn Icon */}
                            <a href="#" className="w-8 h-8 rounded-lg bg-gray-400 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white transition-colors duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-gray-500">
                    <p>Copyright (c) 2025 by STL Pvt. Ltd. Bangalore. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}