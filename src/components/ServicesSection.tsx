
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
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/d177fdbb-8302-4f78-9b2f-a405f86750ba.png')"
              }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <UserCheck className="w-10 h-10 text-primary" />
              </div>
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
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/ef59c162-50e9-4c73-bba7-46da23d461d6.png')"
              }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Gestion complète des contrats
              </h3>
              <p className="text-black">
                Un expert vous est attribué pour vous guider à chaque étape, de la sélection de votre contrat jusqu'au suivi en cas de sinistre. Toujours disponibles, nous restons à votre disposition pour répondre à vos besoins et interrogations.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url('/lovable-uploads/d73c6a43-5508-43ef-b5cf-39fb4b3b76b4.png')"
              }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Euro className="w-10 h-10 text-primary" />
              </div>
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
