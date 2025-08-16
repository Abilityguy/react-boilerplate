import RegisterAndDownloadButton from "@/RegisterAndDownloadButton"

interface HeroProps {
    scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
    const heroAnimationProgress = Math.min(scrollY, 300) / 300;
    const heroOpacity = 1 - heroAnimationProgress;
    const heroTranslateY = heroAnimationProgress * -20;

    return (
        <>
        <style>
            {`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                animation: scroll 20s linear infinite;
            }
            .carousel-item {
                min-width: calc(33.33% - 1.5rem); /* Adjust width for 3 items with gap */
            }
            `}
        </style>

        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 
                className="text-4xl md:text-6xl font-bold text-gray-800 transition-all duration-500"
                style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
            >
                Accelerate Firmware Development
            </h1>
            {/* Small text below the hero heading, fades out with it */}
            <p 
                className="text-lg md:text-xl text-gray-700 transition-all duration-500 mt-2"
                style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
            >
                ARX lets you design and develop ARM & RISC-V architecture based firmware
            </p>
                        <p 
                className="text-lg md:text-xl text-gray-700 transition-all duration-500 mt-2"
                style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
            >
                Rich set of inbuilt libraries to accelerate development
            </p>
            <div className="px-6 py-3">
                <RegisterAndDownloadButton />
            </div>

            {/* The new "Main Graphics" placeholder, now larger and below the text */}
            <div 
                className="w-full max-w-lg md:max-w-3xl h-64 md:h-96 bg-gray-400 rounded-lg shadow-lg flex items-center justify-center transition-all duration-500 mb-8"
                style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
            >
                <span className="text-2xl font-bold text-gray-800">Main Graphics</span>
            </div>

            {/* New carousel section for "Built for" */}
            <div 
                className="w-full overflow-hidden px-4"
                style={{ opacity: heroOpacity, transform: `translateY(${heroTranslateY}px)` }}
            >
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-2">Built for</p>
                {/* The looping carousel container. The content is duplicated to allow for a seamless loop */}
                <div className="flex space-x-6 animate-scroll">
                    {/* Carousel Items (duplicated for seamless loop) */}
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Embedded System</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Robotics</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Automotive</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Defence</div>
                    {/* Duplicated set */}
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Embedded System</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Robotics</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Automotive</div>
                    <div className="carousel-item flex-shrink-0 px-4 py-2 bg-white rounded-full shadow-sm text-gray-800 text-sm font-medium whitespace-nowrap">Defence</div>
                </div>
            </div>
        </div>

        {/* Graphics Section 1 */}
        <div className="h-screen flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700">Graphics 1</h2>
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-xl text-gray-600">Placeholder for Graphics 1</span>
            </div>
        </div>

        {/* Graphics Section 2 */}
        <div className="h-screen flex flex-col items-center justify-center text-center p-12 bg-gray-100">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700">Graphics 2</h2>
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-xl text-gray-600">Placeholder for Graphics 2</span>
            </div>
        </div>

        {/* Graphics Section 3 */}
        <div className="h-screen flex flex-col items-center justify-center text-center p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-700">Graphics 3</h2>
            <div className="w-full max-w-md h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
                <span className="text-xl text-gray-600">Placeholder for Graphics 3</span>
            </div>
        </div>

        </>
    )
}