import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Clients = () => {
    // Client logos data
    const clientLogos = [
        {
            id: 1,
            name: "Sociedad Saleciana",
            logo: "/sociedad saleciana.png",
            alt: "Sociedad Saleciana Logo"
        },
        {
            id: 2,
            name: "Madog",
            logo: "/madog.png",
            alt: "Madog Logo"
        },
        {
            id: 3,
            name: "Quadriga",
            logo: "/quadriga.png",
            alt: "Quadriga Logo"
        },
        {
            id: 4,
            name: "Flor",
            logo: "/flor.png",
            alt: "Flor Logo"
        },
        {
            id: 5,
            name: "Asset Company",
            logo: "/Asset-1@3x.png",
            alt: "Asset Company Logo"
        },
        {
            id: 6,
            name: "LL Company",
            logo: "/ll.png",
            alt: "LL Company Logo"
        },
        {
            id: 7,
            name: "Itook",
            logo: "/itook.png",
            alt: "Itook Logo"
        }
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    return (
        <section className="py-16 bg-gradient-to-r from-prak-light to-white border-b border-prak-gray/10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-6 uppercase tracking-[0.15em] shadow-premium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="w-2 h-2 bg-prak-dark rounded-full"></div>
                        NUESTROS CLIENTES
                    </motion.div>
                    <motion.h2
                        className="text-3xl md:text-4xl font-black text-prak-dark mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Empresas que confían en nosotros
                    </motion.h2>
                    <motion.p
                        className="text-prak-gray-dark font-medium max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Trabajamos con empresas líderes en diversos sectores, brindando soluciones de calidad y cumplimiento normativo.
                    </motion.p>
                </motion.div>

                {/* Moving Logos Container */}
                <div className="relative overflow-hidden">
                    {/* First Row - Moving Right */}
                    <motion.div
                        className="flex items-center gap-12 mb-8"
                        animate={{
                            x: [0, -50 * clientLogos.length] // Reduced movement distance
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // Slower animation for better performance
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedLogos.map((client, index) => (
                            <div
                                key={`first-${client.id}-${index}`}
                                className="flex-shrink-0 flex items-center justify-center h-20 w-32 bg-white rounded-xl shadow-soft border border-prak-gray/10 p-4 hover:shadow-elegant transition-all duration-300 group"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.alt}
                                    className="max-h-12 max-w-24 object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Single row only (removed second row) */}
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-prak-gray/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="text-3xl font-bold text-prak-yellow mb-2">15+</div>
                        <div className="text-sm text-prak-gray-dark font-medium uppercase tracking-wide">CLIENTES SATISFECHOS</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="text-3xl font-bold text-prak-teal mb-2">100%</div>
                        <div className="text-sm text-prak-gray-dark font-medium uppercase tracking-wide">CUMPLIMIENTO</div>
                    </motion.div>

                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Button
                        onClick={() => {
                            const element = document.getElementById("contacto");
                            if (element) {
                                const offsetTop = element.offsetTop - 100;
                                window.scrollTo({
                                    top: offsetTop,
                                    behavior: "smooth"
                                });
                            }
                        }}
                        size="lg"
                        className="bg-gradient-to-r from-prak-yellow to-prak-teal hover:from-prak-yellow/90 hover:to-prak-teal/90 text-white font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 hover:scale-105 group"
                    >
                        Solicitar Cotización Gratuita
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
