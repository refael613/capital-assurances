
import { Shield, Home, Car, Heart, Briefcase, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Assurances = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Nos Assurances</h1>
        <p className="text-lg mb-12">
          Chez Capital Assurances, nous proposons une gamme complète de solutions d'assurance pour répondre à tous vos besoins, qu'ils soient personnels ou professionnels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Assurance Habitation</h2>
            </div>
            <p className="mb-4">
              Protection complète pour votre résidence principale, secondaire ou bien locatif contre les dommages et la responsabilité civile.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Assurance Auto</h2>
            </div>
            <p className="mb-4">
              Des formules adaptées à vos besoins, de la simple responsabilité civile à la couverture tous risques pour votre véhicule.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Assurance Santé</h2>
            </div>
            <p className="mb-4">
              Des garanties sur mesure pour vous accompagner dans vos dépenses de santé et vous offrir une protection optimale.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Assurance Entreprise</h2>
            </div>
            <p className="mb-4">
              Des solutions complètes pour protéger votre activité, vos locaux, vos salariés et votre responsabilité professionnelle.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Assurance Professionnelle</h2>
            </div>
            <p className="mb-4">
              Couverture spécifique pour les travailleurs indépendants, artisans, commerçants et professions libérales.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Prévoyance</h2>
            </div>
            <p className="mb-4">
              Protection financière pour vous et vos proches en cas d'accident, d'invalidité ou de décès.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              En savoir plus
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Besoin d'un devis personnalisé?</h3>
          <p className="text-lg mb-6">
            Contactez-nous pour obtenir une analyse gratuite de vos besoins et un devis sur mesure.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assurances;
