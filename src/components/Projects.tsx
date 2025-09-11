import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Users } from "lucide-react";

const Projects = () => {
  const clients = [
    {
      name: "PROMOTORA ALUMINUM S.A.S",
      projects: [
        {
          name: "LUMINUM",
          address: "CALLE 104 #26-36",
          status: "En construcción"
        }
      ],
      hasLogo: false
    },
    {
      name: "Construye RK SAS",
      projects: [
        {
          name: "Estambul",
          address: "Calle 17 # 115 - 10",
          status: "En construcción"
        },
        {
          name: "Tokyo",
          address: "Av Carrera 45 # 95 - 86",
          status: "Completado"
        }
      ],
      hasLogo: true
    },
    {
      name: "Flor Constructores",
      projects: [
        {
          name: "Sekai 53",
          address: "Carrera 53 D Bis 4 D - 03",
          status: "En desarrollo"
        }
      ],
      hasLogo: true
    },
    {
      name: "Madoc IN & Co SAS",
      projects: [
        {
          name: "Edificio E43",
          address: "Calle 43 # 28 - 38",
          status: "Completado"
        },
        {
          name: "Living Factory",
          address: "Calle 18 # 54 - 20",
          status: "Completado"
        }
      ],
      hasLogo: true
    },
    {
      name: "Promotora QUADRIGA",
      projects: [
        {
          name: "VITA 144",
          address: "Calle 144 # 19 A - 09",
          status: "Completado"
        },
        {
          name: "Portal de Santa Sofía",
          address: "Calle 64 sur N 2 D - 55",
          status: "Completado"
        }
      ],
      hasLogo: true
    },
    {
      name: "Mas Developers",
      projects: [
        {
          name: "Casa Ámbar",
          address: "CRA 12 A # 83 - 75",
          status: "Completado"
        },
        {
          name: "Casa E",
          address: "Calle 86 A # 11 - 53",
          status: "En desarrollo"
        },
        {
          name: "Casa Índigo",
          address: "Calle 93 B # 13 - 68",
          status: "Completado"
        },
        {
          name: "Park 93",
          address: "CRA 13A # 93-38",
          status: "Completado"
        }
      ],
      hasLogo: true
    },
    {
      name: "Salesianos de Don Bosco",
      projects: [
        {
          name: "Instituto Técnico Industrial Centro Don Bosco",
          address: "Diagonal 44 No. 69-96",
          status: "Completado"
        },
        {
          name: "Urbanismo Instituto Técnico Industrial",
          address: "Diagonal 44 No. 69-96",
          status: "En desarrollo"
        }
      ],
      hasLogo: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En desarrollo":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "En construcción":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="proyectos" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nuestro Portafolio</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proyectos 
            <span className="text-prak-orange"> Ejecutados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con los mejores desarrolladores y constructores de Colombia
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-lg opacity-90">Clientes de Confianza</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-accent text-white">
            <CardContent className="p-8 text-center">
              <Building className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">14</div>
              <div className="text-lg opacity-90">Obras Gestionadas</div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, clientIndex) => (
            <div key={clientIndex} className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full ${client.hasLogo ? 'bg-green-500' : 'bg-gray-400'}`} />
                <h3 className="font-semibold text-lg">{client.name}</h3>
              </div>
              
              {client.projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="hover:shadow-orange transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-prak-orange mb-2">{project.name}</h4>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{project.address}</span>
                        </div>
                      </div>
                      
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">¿Tu proyecto será el siguiente?</h3>
              <p className="text-muted-foreground mb-6">
                Únete a nuestros clientes satisfechos y asegura el cumplimiento normativo de tu proyecto
              </p>
              <a 
                href="#contacto" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-prak-orange text-white hover:bg-prak-orange/90 h-10 px-4 py-2"
              >
                Iniciar Proyecto
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;