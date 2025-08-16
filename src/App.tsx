import Header from "@/Header"
import Hero from "@/Hero"
import Footer from "@/Footer"
import { useEffect, useState } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listeners.
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isVisible = scrollY > viewportHeight * 0.5;

  return (
    <div className="bg-gradient-to-b from-white to-gray-200 font-sans min-h-screen">
      {/* Header */}
      <Header isVisible={isVisible}/>
      <Hero scrollY={scrollY}/>
      <Footer/>
    </div>
  );
}