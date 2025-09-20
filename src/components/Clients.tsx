import React from "react";
import { motion } from "framer-motion";

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
                            x: [0, -100 * clientLogos.length] // Move by the width of all logos
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20, // 20 seconds for full cycle
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedLogos.map((client, index) => (
                            <motion.div
                                key={`first-${client.id}-${index}`}
                                className="flex-shrink-0 flex items-center justify-center h-20 w-32 bg-white rounded-xl shadow-soft border border-prak-gray/10 p-4 hover:shadow-elegant transition-all duration-300 group"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.alt}
                                    className="max-h-12 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Second Row - Moving Left */}
                    <motion.div
                        className="flex items-center gap-12"
                        animate={{
                            x: [-100 * clientLogos.length, 0] // Move in opposite direction
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25, // Slightly different speed for variety
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedLogos.map((client, index) => (
                            <motion.div
                                key={`second-${client.id}-${index}`}
                                className="flex-shrink-0 flex items-center justify-center h-20 w-32 bg-white rounded-xl shadow-soft border border-prak-gray/10 p-4 hover:shadow-elegant transition-all duration-300 group"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.alt}
                                    className="max-h-12 max-w-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-prak-gray/20"
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
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="text-3xl font-bold text-prak-yellow mb-2">5+</div>
                        <div className="text-sm text-prak-gray-dark font-medium uppercase tracking-wide">AÑOS DE EXPERIENCIA</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
