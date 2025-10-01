import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Building,
    MessageSquare,
    Users,
    Calendar,
    CheckCircle
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        projectType: "",
        constructionArea: "",
        message: "",
        newsletter: false,
        privacy: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [referenceNumber] = useState(() => `REF-${Math.floor(100000 + Math.random() * 900000)}-${Math.floor(1000 + Math.random() * 9000)}`);

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                projectType: "",
                constructionArea: "",
                message: "",
                newsletter: false,
                privacy: false
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Ubicación",
            details: "Bogotá, Colombia",
            description: "Servicios en toda Colombia"
        },
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            details: "coordinador@prakingenieros.com",
            description: "Respuesta en menos de 24 horas"
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Horarios",
            details: "Lun - Vie: 8:00 AM - 6:00 PM",
            description: "Consultas de emergencia disponibles"
        }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="contacto" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-white text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium">
                            <MessageSquare className="w-4 h-4" />
                            CONTACTO
                        </div>
                    </motion.div>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.9]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <span className="text-white">¿Listo para</span>
                        <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-teal bg-clip-text text-transparent">
                            Transformar tu Proyecto?
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        Obtén una consulta gratuita y descubre cómo podemos ayudarte a cumplir con la normatividad ambiental y maximizar tu presencia digital.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                            <p className="text-white/80 leading-relaxed mb-8">
                                Estamos aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="p-3 bg-prak-yellow/10 rounded-xl">
                                        <div className="text-prak-yellow">
                                            {info.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                                        <p className="text-white/80 font-medium">{info.details}</p>
                                        <p className="text-sm text-white/60">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <motion.div
                            className="bg-gradient-hero text-white p-8 rounded-2xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h4 className="text-xl font-bold mb-6">¿Por qué elegirnos?</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-prak-yellow">7</div>
                                    <div className="text-sm opacity-90">Años de experiencia</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-prak-yellow">14+</div>
                                    <div className="text-sm opacity-90">Proyectos exitosos</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-prak-yellow">100%</div>
                                    <div className="text-sm opacity-90">Cumplimiento</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-prak-yellow">24h</div>
                                    <div className="text-sm opacity-90">Tiempo respuesta</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Card className="shadow-elegant border-0 bg-white/10 backdrop-blur-sm">
                            <CardContent className="p-10">
                                {!isSubmitted ? (
                                    <>
                                        <div className="mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-2">Solicita tu Consulta Gratuita</h3>
                                            <p className="text-white/80">
                                                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Personal Information */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-white font-medium">Nombre completo *</Label>
                                                    <Input
                                                        id="name"
                                                        value={formData.name}
                                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                                        placeholder="Tu nombre completo"
                                                        required
                                                        className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-white font-medium">Correo electrónico *</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                                        placeholder="tu@empresa.com"
                                                        required
                                                        className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="text-white font-medium">Teléfono</Label>
                                                    <Input
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                                        placeholder="+57 315 876 5432"
                                                        className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="company" className="text-white font-medium">Empresa</Label>
                                                    <Input
                                                        id="company"
                                                        value={formData.company}
                                                        onChange={(e) => handleInputChange("company", e.target.value)}
                                                        placeholder="Nombre de tu empresa"
                                                        className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow"
                                                    />
                                                </div>
                                            </div>

                                            {/* Service Selection */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="service" className="text-white font-medium">Servicio de interés *</Label>
                                                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                                                        <SelectTrigger className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow">
                                                            <SelectValue placeholder="Selecciona un servicio" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="construccion">Asesoría Sector Construcción</SelectItem>
                                                            <SelectItem value="ambiental">Consultoría Ambiental y Sostenibilidad</SelectItem>
                                                            <SelectItem value="marketing">Marketing Digital</SelectItem>
                                                            <SelectItem value="consultoria">Consultoría Integral</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="projectType" className="text-white font-medium">Tipo de proyecto</Label>
                                                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                                                        <SelectTrigger className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow">
                                                            <SelectValue placeholder="Tipo de proyecto" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="residencial">Residencial</SelectItem>
                                                            <SelectItem value="comercial">Comercial</SelectItem>
                                                            <SelectItem value="industrial">Industrial</SelectItem>
                                                            <SelectItem value="infraestructura">Infraestructura</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            <div className="space-y-2">
                                                <Label htmlFor="constructionArea" className="text-white font-medium">Área a construir estimada</Label>
                                                <Input
                                                    id="constructionArea"
                                                    value={formData.constructionArea}
                                                    onChange={(e) => handleInputChange("constructionArea", e.target.value)}
                                                    placeholder="Ej: 500 m², 1000 m², etc."
                                                    className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-white font-medium">Cuéntanos sobre tu proyecto *</Label>
                                                <Textarea
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                                    placeholder="Describe tu proyecto, necesidades específicas, desafíos actuales, y cualquier información relevante que nos ayude a entender mejor cómo podemos asistirte."
                                                    rows={5}
                                                    required
                                                    className="border-prak-gray/20 focus:border-prak-yellow focus:ring-prak-yellow resize-none"
                                                />
                                            </div>

                                            {/* Checkboxes */}
                                            <div className="space-y-4">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id="newsletter"
                                                        checked={formData.newsletter}
                                                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                                                    />
                                                    <Label htmlFor="newsletter" className="text-sm text-white/80">
                                                        Quiero recibir actualizaciones sobre servicios y mejores prácticas
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id="privacy"
                                                        checked={formData.privacy}
                                                        onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                                                        required
                                                    />
                                                    <Label htmlFor="privacy" className="text-sm text-white/80">
                                                        Acepto la <a href="#" className="text-prak-yellow hover:underline">política de privacidad</a> y el tratamiento de mis datos *
                                                    </Label>
                                                </div>
                                            </div>

                                            {/* Submit Buttons */}
                                            <div className="flex flex-col gap-4">
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting || !formData.privacy}
                                                    className="w-full bg-gradient-to-r from-prak-yellow to-prak-teal hover:from-prak-yellow/90 hover:to-prak-teal/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-elegant hover:shadow-premium"
                                                >
                                                    {isSubmitting ? (
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                            Enviando...
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-2">
                                                            <Send className="w-5 h-5" />
                                                            Solicitar Consulta Gratuita
                                                        </div>
                                                    )}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    onClick={() => scrollToSection("proyectos")}
                                                    className="w-full bg-prak-dark hover:bg-prak-dark/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-elegant"
                                                >
                                                    Ver Proyectos
                                                </Button>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        className="text-center py-12"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
                                        <p className="text-white/80 mb-6">
                                            Gracias por contactarnos. Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de 24 horas.
                                        </p>
                                        <div className="bg-prak-light p-6 rounded-xl">
                                            <p className="text-sm text-white/80">
                                                <strong>Próximos pasos:</strong><br />
                                                • Revisaremos tu proyecto<br />
                                                • Te contactaremos para una consulta inicial<br />
                                                • Prepararemos una propuesta personalizada
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
