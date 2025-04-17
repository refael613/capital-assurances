
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/30 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/544123f8-7f48-434b-8e5a-7f5f866adc9e.png')"
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <div 
          className="max-w-2xl p-8 rounded-lg"
          style={{
            backgroundImage: "url('/lovable-uploads/e2224991-9c17-4a55-934e-3c4b6825e2a6.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Assurances pour Particuliers, Professionnels et Entreprises
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Trouvez le meilleur contrat d'assurance pour votre activité professionnelle, pour vos biens et pour vous même.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Découvrir
            </Button>
            <Button variant="outline" className="bg-white/90 border-primary text-black hover:bg-white">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
