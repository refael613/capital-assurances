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
          {/* Using the icons from the provided design */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <img 
              src="/lovable-uploads/d8f0d9e4-41ee-4d0e-8dca-727ccec3601c.png" 
              alt="Service client personnalisé"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Service client personnalisé
              </h3>
              <p className="text-black">
                Un conseiller dédié vous accompagne tout au long de votre parcours, de la recherche de contrat à la gestion des sinistres. Nous sommes à votre écoute pour répondre à toutes vos questions.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <img 
              src="/lovable-uploads/8e2305f3-6733-4386-8a48-9dfbfdb9a81c.png" 
              alt="Gestion complète des contrats"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Gestion complète des contrats
              </h3>
              <p className="text-black">
                Nous prenons en charge l'ensemble de vos démarches administratives liées à vos contrats d'assurance. Un gain de temps précieux et l'assurance d'un suivi rigoureux.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Euro className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">
                Économies assurées
              </h3>
              <p className="text-black">
                Grâce à notre réseau de partenaires et à notre pouvoir de négociation, nous vous garantissons les meilleures couvertures aux tarifs les plus compétitifs du marché.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
