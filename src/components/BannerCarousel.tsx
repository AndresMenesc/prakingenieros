import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerImage {
    id: number;
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
}

const BannerCarousel = () => {
    // Define banner images - you can add more images here
    const bannerImages: BannerImage[] = [
        {
            id: 1,
            src: "/fullbackground.jpg",
            alt: "PRAK Ingenieros - Ingeniería de Calidad",
            title: "Segura, Confiable",
            subtitle: "& Alta Calidad Ingeniería"
        },
        {
            id: 2,
            src: "/Cover_Park93.jpg",
            alt: "Park 93 - Proyecto Residencial",
            title: "Proyectos Residenciales",
            subtitle: "De Alta Calidad"
        },
        {
            id: 3,
            src: "/MASDevelopers_AmbarRender.jpg",
            alt: "Casa Ámbar - Desarrollo Premium",
            title: "Desarrollo Premium",
            subtitle: "Innovación & Sostenibilidad"
        },
        {
            id: 4,
            src: "/estudio43.jpeg",
            alt: "Edificio E43 - Arquitectura Moderna",
            title: "Arquitectura Moderna",
            subtitle: "Diseño & Funcionalidad"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel every 3 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, bannerImages.length]);

    const goToPrevious = () => {
        setIsAutoPlaying(false); // Pause auto-play when manually navigating
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setIsAutoPlaying(false); // Pause auto-play when manually navigating
        setCurrentImageIndex((prevIndex =>
            prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
        ));
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false); // Pause auto-play when manually navigating
        setCurrentImageIndex(index);
    };

    // Resume auto-play after 10 seconds of inactivity
    useEffect(() => {
        if (!isAutoPlaying) {
            const timer = setTimeout(() => {
                setIsAutoPlaying(true);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [isAutoPlaying]);

    const currentImage = bannerImages[currentImageIndex];

    return (
        <div className="relative w-full h-screen overflow-hidden group">
            {/* Background Images with Smooth Transitions */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `url('${currentImage.src}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-prak-dark/90 via-prak-teal/80 to-prak-dark/85"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-prak-dark/40 via-transparent to-transparent"></div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-prak-yellow scale-125'
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-4 right-4 z-20">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
                    <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-prak-yellow' : 'bg-white/50'}`} />
                    <span className="text-white text-xs font-medium">
                        {isAutoPlaying ? 'Auto' : 'Paused'}
                    </span>
                </div>
            </div>

            {/* Content Overlay - This will be controlled by the parent component */}
            <div className="absolute inset-0 z-10">
                {/* Content will be passed as children */}
            </div>
        </div>
    );
};

export default BannerCarousel;
