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
      icon: <Building className="h-12 w-12 text-prak-orange" />,
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
      icon: <Leaf className="h-12 w-12 text-prak-orange" />,
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
    <section id="servicios" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-prak-orange/10 text-prak-orange text-sm font-semibold rounded-full mb-6 uppercase tracking-wide">
            Lo que ofrecemos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Brindando soluciones para 
            <span className="text-prak-orange block">
              construcción, gestión,
            </span>
            <span className="block">y sostenibilidad.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos una empresa de servicios de construcción e ingeniería establecida e independiente. 
            Tenemos una gran experiencia trabajando como constructores principales en todo tipo de proyectos.
          </p>
        </div>

        {/* Environmental Services Cards */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {environmentalServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="p-4 bg-prak-orange/10 rounded-2xl inline-block mb-6 group-hover:bg-prak-orange/20 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-prak-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-prak-orange flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
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
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-4">
              <TrendingUp className="h-10 w-10 text-prak-orange" />
              Marketing Digital
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estrategias digitales integrales para maximizar su presencia online y ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {digitalServices.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="p-4 bg-prak-orange/10 rounded-xl inline-block mb-4 group-hover:bg-prak-orange/20 transition-colors">
                      {React.cloneElement(service.icon, { className: "h-8 w-8 text-prak-orange" })}
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-prak-orange transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-prak-orange rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
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