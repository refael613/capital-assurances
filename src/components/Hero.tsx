
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black/30 z-10"></div>
      
      {/* Fallback background for when video isn't loaded */}
      <div className="absolute inset-0 bg-gray-800"></div>
      
      {/* Video (simulated with a placeholder) */}
      <div className="absolute inset-0 w-full h-full object-cover">
        <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center text-white">
          <span className="sr-only">Video montrant un professionnel en costume travaillant sur un document</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Assurances pour Particuliers, Professionnels et Entreprises
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            Trouvez le meilleur contrat d'assurance pour votre activité professionnelle, pour vos biens et pour vous même.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Découvrir
            </Button>
            <Button variant="outline" className="border-primary text-black hover:bg-primary/10">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
