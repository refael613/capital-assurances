
import { FileText, ClipboardCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarteGrise = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">Service Carte Grise</h1>
        <p className="text-lg mb-12">
          Capital Assurances vous accompagne dans toutes vos démarches d'immatriculation. Notre service vous permet d'obtenir votre carte grise rapidement et sans tracas administratifs.
        </p>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Nos services d'immatriculation</h2>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Immatriculation de véhicule neuf</h3>
                <p className="mt-1">Obtenez votre première carte grise pour votre véhicule neuf.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Changement de titulaire</h3>
                <p className="mt-1">Pour l'achat d'un véhicule d'occasion, nous effectuons le changement de propriétaire.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Changement d'adresse</h3>
                <p className="mt-1">Mise à jour de votre carte grise suite à un déménagement.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Duplicata</h3>
                <p className="mt-1">En cas de perte, vol ou détérioration de votre carte grise.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Simple</h3>
            <p>
              Nous nous occupons de toutes les formalités administratives. Vous n'avez qu'à nous fournir les documents nécessaires.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Rapide</h3>
            <p>
              Notre procédure accélérée vous permet d'obtenir votre carte grise dans les meilleurs délais.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Sécurisé</h3>
            <p>
              Tous vos documents sont traités en toute sécurité et confidentialité conformément à la réglementation en vigueur.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour votre carte grise?</h3>
          <p className="text-lg mb-6">
            Contactez-nous pour obtenir des informations supplémentaires ou commencer votre démarche.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Commencer ma démarche
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarteGrise;
