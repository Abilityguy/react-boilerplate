
import { Search, User, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg"
import RegisterAndDownloadButton from "@/RegisterAndDownloadButton";

interface HeaderProps {
    isVisible: boolean;
}

export default function Header({ isVisible }: HeaderProps) {
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 bg-white/80 backdrop-blur-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
            <div className="w-full px-4 sm:px-6 py-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                        { /* Logo */ }
                        <img src={logo} alt="ARX logo" className="h-12 w-auto mr-4 rounded-lg"/>
                    
                        { /* Icons */ }
                        <div className="flex gap-4 sm:gap-6 items-center">
                            <Search className="w-6 h-6 text-gray-500 cursor-pointer hover:text-teal-500 transition-colors duration-300 hover:scale-110 transform" />
                            <User className="w-6 h-6 text-gray-500 cursor-pointer hover:text-teal-500 transition-colors duration-300 hover:scale-110 transform" />
                            <Mail className="w-6 h-6 text-gray-500 cursor-pointer hover:text-teal-500 transition-colors duration-300 hover:scale-110 transform" />
                            <RegisterAndDownloadButton/>
                        </div>
                </div>
            </div>
        </header>
    )
}