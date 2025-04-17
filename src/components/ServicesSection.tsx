import { UserCheck, FileText, Euro } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Assurances sur mesure
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Nous proposons des solutions d'assurance créatives et adaptées à vos besoins spécifiques, qu'il s'agisse de protéger votre famille, votre entreprise ou votre patrimoine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative overflow-hidden">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/lovable-uploads/service3.jpg')"
                }}
              ></div>
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Service client personnalisé
              </h3>
              <p className="text-black">
                Un expert vous est attribué pour vous guider à chaque étape, de la sélection de votre contrat jusqu'au suivi en cas de sinistre. Toujours disponibles, nous restons à votre disposition pour répondre à vos besoins et interrogations.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative overflow-hidden">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/lovable-uploads/service2.jpg')"
                }}
              ></div>
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Gestion complète des contrats
              </h3>
              <p className="text-black">
 Nous nous occupons de toutes les formalités administratives liées à vos assurances, vous permettant ainsi de gagner du temps et de bénéficier d’un suivi fiable et professionnel.              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 relative overflow-hidden">
              {/* Background image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/lovable-uploads/service1.jpg')"
                }}
              ></div>
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Économies assurées
              </h3>
              <p className="text-black">
                Des offres compétitives sans compromis sur la qualité<br />
                Grâce à nos partenaires et notre connaissance du marché, nous sélectionnons pour vous les meilleures solutions d'assurance au juste prix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
