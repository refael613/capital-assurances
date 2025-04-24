import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/lovable-uploads/1616b15a-3a62-4e44-9f8f-fd9b069757b9.png"
              alt="Capital Assurances Logo"
              className="h-24 w-auto max-w-full object-contain mb-4"
            />
            <p className="mb-4">
              Votre courtier en assurances pour particuliers, professionnels et
              entreprises.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>05 32 26 15 42</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@capital-assurances.com" className="hover:text-primary transition-colors">
                  contact@capital-assurances.com
                </a>
              </div>
              <div>
                <p>5 rue Fénelon</p>
                <p>33000 Bordeaux</p>
                <p className="mt-2 text-sm">ORIAS 25002618</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center items-center md:items-end">
            <Button className="bg-primary hover:bg-primary/90 text-white mb-6 w-full md:w-auto">
              Je veux une assurance
            </Button>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-de-confidentialite" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-primary transition-colors">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Capital Assurances. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
