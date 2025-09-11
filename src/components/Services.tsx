import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf, 
  Building, 
  Shield, 
  TrendingUp, 
  Target, 
  BarChart3, 
  CheckCircle, 
  Users,
  Globe,
  Zap
} from "lucide-react";

const Services = () => {
  const environmentalServices = [
    {
      icon: <Building className="h-12 w-12 text-prak-yellow" />,
      title: "Asesoría Sector Construcción",
      description: "Minimizamos los riesgos asociados a cierres y multas por incumplimiento de la normatividad ambiental y de sostenibilidad vigente.",
      features: [
        "Elaboración de planes de gestión de Residuos de Construcción y Demolición a nivel nacional para la obtención de PIN",
        "Actualización mensual de la plataforma de reporte",
        "Cierre de PIN del proyecto",
        "Evaluación de requisitos de construcción sostenible aplicables a la edificación a construir",
        "Capacitación al personal en la normatividad vigente",
        "Visitas de verificación de cumplimiento de medidas ambientales",
        "Evaluación de sistemas con posibles Beneficios Tributarios ante la UPME",
        "Certificación EDGE"
      ]
    },
    {
      icon: <Leaf className="h-12 w-12 text-prak-teal" />,
      title: "Consultoría Ambiental y Sostenibilidad",
      description: "Contamos con expertos en temas ambientales para asesorar en cumplimiento y mejores prácticas.",
      features: [
        "Cumplimiento legal ambiental: elaboración de matrices legales ambientales y trámites de permisos ambientales ante las autoridades correspondientes",
        "Planes de gestión ambiental: elaboración de los planes de gestión ambiental aplicables a la compañía enmarcados en el ciclo PHVA",
        "ISO 14001 y RUC: auditorías internas al sistema de gestión ISO14001 y preparación de auditoría RUC",
        "Diagnóstico ambiental inicial: diagnóstico integral del cumplimiento actual de la compañía y propuesta de mejoras a nivel de manejo ambiental interno",
        "Análisis de materialidad y elaboración de reportes de sostenibilidad estándar GRI"
      ]
    }
  ];

  const digitalServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Publicidad en Redes Sociales",
      items: [
        "Campañas en Meta Ads (Facebook & Instagram)",
        "Campañas en TikTok Ads",
        "Campañas en LinkedIn Ads",
        "Optimización de anuncios para ventas, leads y awareness",
        "Estrategias de remarketing en redes sociales"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Publicidad en Buscadores y Display",
      items: [
        "Campañas en Google Ads (Búsqueda, Display, Shopping, YouTube)",
        "Estrategias de Performance Max",
        "Campañas de remarketing en Google"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Programmatic Advertising",
      items: [
        "Compra programática de medios en DSPs (Mediasmart, Targetoo, DV360)",
        "Estrategias multicanal (Display, CTV, Audio, DOOH)",
        "Segmentación avanzada con data y audiencias personalizadas"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analítica y Medición",
      items: [
        "Implementación de Google Tag Manager (eventos, conversiones, píxeles)",
        "Configuración de píxeles publicitarios (Meta, TikTok, Google, LinkedIn)",
        "Integración y configuración de Google Analytics 4 (GA4)",
        "Dashboards personalizados de rendimiento"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Estrategia y Optimización",
      items: [
        "Auditoría de campañas publicitarias",
        "Diseño de embudos de conversión",
        "A/B Testing de creativos y landings",
        "Estrategias de optimización de inversión publicitaria (ROAS / CPA)"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoría & Acompañamiento",
      items: [
        "Asesorías personalizadas en marketing digital",
        "Capacitación a equipos internos en plataformas publicitarias",
        "Planes de crecimiento digital para marcas"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-40 bg-gradient-to-b from-prak-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium">
            <div className="w-2 h-2 bg-prak-dark rounded-full"></div>
            LO QUE OFRECEMOS
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.9]">
            <span className="text-prak-dark">Brindando soluciones para</span>
            <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-teal bg-clip-text text-transparent">
              construcción, gestión,
            </span>
            <span className="block text-prak-teal font-light">y sostenibilidad.</span>
          </h2>
          <p className="text-xl text-prak-gray-dark max-w-4xl mx-auto leading-relaxed font-medium">
            Somos una empresa de servicios de construcción e ingeniería establecida e independiente. 
            Tenemos una gran experiencia trabajando como constructores principales en todo tipo de proyectos.
          </p>
        </div>

        {/* Environmental Services Cards */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {environmentalServices.map((service, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-elegant hover:shadow-premium transition-all duration-700 group overflow-hidden hover:-translate-y-3 rounded-3xl">
                <CardContent className="p-12">
                  <div className="mb-10">
                    <div className={`p-6 ${index === 0 ? 'bg-prak-yellow/10' : 'bg-prak-teal/10'} rounded-3xl inline-block mb-8 group-hover:scale-110 transition-all duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-3xl font-black mb-6 ${index === 0 ? 'group-hover:text-prak-yellow' : 'group-hover:text-prak-teal'} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-xl text-prak-gray-dark leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4 group/item hover:bg-prak-gray/20 p-3 rounded-xl transition-all duration-300">
                        <CheckCircle className={`h-6 w-6 ${index === 0 ? 'text-prak-yellow' : 'text-prak-teal'} flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform`} />
                        <span className="text-prak-gray-dark leading-relaxed font-medium group-hover/item:text-prak-dark transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div>
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-6">
              <TrendingUp className="h-12 w-12 text-prak-teal" />
              <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                MARKETING DIGITAL
              </span>
            </h3>
            <p className="text-xl text-prak-gray-dark max-w-3xl mx-auto font-medium leading-relaxed">
              Estrategias digitales integrales para maximizar su presencia online y ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {digitalServices.map((service, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="p-5 bg-gradient-to-br from-prak-teal/10 to-prak-yellow/10 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-all duration-300">
                      {React.cloneElement(service.icon, { className: "h-8 w-8 text-prak-teal" })}
                    </div>
                    <h4 className="text-xl font-bold mb-6 group-hover:text-prak-teal transition-colors text-prak-dark">
                      {service.title}
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-4 hover:bg-prak-teal/5 p-2 rounded-lg transition-all duration-300">
                        <div className="w-2 h-2 bg-prak-yellow rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-prak-gray-dark leading-relaxed font-medium hover:text-prak-dark transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;