
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Log to check if image is loading
    const img = new Image();
    img.src = '/lovable-uploads/CAPITAL (2).jpg';
    img.onload = () => console.log('Hero background image loaded successfully');
    img.onerror = (e) => console.error('Hero background image failed to load', e);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/30 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/background.jpg')`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
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
