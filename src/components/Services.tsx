import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Leaf, 
  CheckCircle, 
  FileText, 
  Users, 
  Eye,
  TrendingUp,
  Target,
  BarChart3,
  Settings,
  Lightbulb,
  HeadphonesIcon
} from "lucide-react";

const Services = () => {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Servicios Especializados</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluciones 
            <span className="text-prak-orange"> Integrales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios especializados en dos áreas principales: consultoría ambiental y marketing digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Environmental Services */}
          <Card className="overflow-hidden hover:shadow-orange transition-all duration-300">
            <CardHeader className="bg-gradient-hero text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Consultoría Ambiental</CardTitle>
                  <CardDescription className="text-white/80">
                    Sostenibilidad y cumplimiento normativo
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Construction Advisory */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-prak-orange" />
                  <h3 className="font-semibold">Asesoría Sector Construcción</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Minimizamos riesgos de cierres y multas por incumplimiento normativo:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Elaboración de planes de gestión RCD para obtención de PIN</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Actualización mensual de plataforma de reporte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Cierre de PIN del proyecto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Evaluación de construcción sostenible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Capacitación en normatividad vigente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Visitas de verificación ambiental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Evaluación de beneficios tributarios UPME</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Certificación EDGE</span>
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Environmental Consulting */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Leaf className="h-5 w-5 text-prak-orange" />
                  <h3 className="font-semibold">Consultoría Ambiental y Sostenibilidad</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-prak-orange mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Cumplimiento legal ambiental:</span>
                      <p className="text-sm text-muted-foreground">Matrices legales y trámites de permisos ambientales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Settings className="h-4 w-4 text-prak-orange mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Planes de gestión ambiental:</span>
                      <p className="text-sm text-muted-foreground">Enmarcados en el ciclo PHVA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">ISO 14001 y RUC:</span>
                      <p className="text-sm text-muted-foreground">Auditorías internas y preparación RUC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye className="h-4 w-4 text-prak-orange mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Diagnóstico ambiental inicial:</span>
                      <p className="text-sm text-muted-foreground">Evaluación integral y propuesta de mejoras</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className="h-4 w-4 text-prak-orange mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Reportes de sostenibilidad:</span>
                      <p className="text-sm text-muted-foreground">Análisis de materialidad y estándar GRI</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digital Marketing Services */}
          <Card className="overflow-hidden hover:shadow-orange transition-all duration-300">
            <CardHeader className="bg-gradient-accent text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Marketing Digital</CardTitle>
                  <CardDescription className="text-white/80">
                    Estrategias publicitarias y analítica avanzada
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Social Media Advertising */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-prak-orange" />
                  <h3 className="font-semibold">Publicidad en Redes Sociales</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Campañas en Meta Ads (Facebook & Instagram)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Campañas en TikTok Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Campañas en LinkedIn Ads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Optimización para ventas, leads y awareness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Estrategias de remarketing</span>
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Search & Display */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-prak-orange" />
                  <h3 className="font-semibold">Google Ads & Programmatic</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Campañas en Google Ads completas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Estrategias Performance Max</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Compra programática en DSPs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Segmentación avanzada</span>
                  </li>
                </ul>
              </div>

              <Separator />

              {/* Analytics & Optimization */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-prak-orange" />
                  <h3 className="font-semibold">Analítica y Optimización</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Settings className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Google Tag Manager y GA4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BarChart3 className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Dashboards personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>A/B Testing y optimización ROAS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HeadphonesIcon className="h-4 w-4 text-prak-orange mt-0.5 flex-shrink-0" />
                    <span>Consultoría y capacitación</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;