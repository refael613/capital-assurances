
import { Button } from "@/components/ui/button";
import { Shield, Home, Car, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
          Qui sommes-nous?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg mb-6">
              Fondée en 2021, <strong>Capital Assurances</strong> est un courtier en assurances spécialisé dans la recherche et la gestion de solutions d'assurance adaptées aux besoins des particuliers, professionnels et entreprises.
            </p>
            <p className="text-lg mb-6">
              Notre mission est de vous accompagner dans la protection de votre patrimoine, de votre activité et de vos proches en vous proposant des contrats d'assurance sur mesure et au meilleur prix.
            </p>
            <p className="text-lg mb-8">
              Grâce à notre réseau de partenaires assureurs et à notre expertise, nous vous garantissons un service personnalisé et des conseils adaptés à votre situation spécifique.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Découvrez
            </Button>
          </div>
          
          {/* Illustration */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 relative z-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Home className="w-12 h-12 text-primary" />
                  </div>
                  <span className="font-medium">Assurance Habitation</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Car className="w-12 h-12 text-primary" />
                  </div>
                  <span className="font-medium">Assurance Auto</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <span className="font-medium">Assurance Famille</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <span className="font-medium">Protection Complète</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
