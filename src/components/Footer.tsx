
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">CAPITAL</span> ASSURANCES
            </h3>
            <p className="mb-4">
              Votre courtier en assurances pour particuliers, professionnels et
              entreprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:contact@capital-assurances.fr" className="hover:text-primary transition-colors">
                  contact@capital-assurances.fr
                </a>
              </div>
              <div>
                <p>123 Avenue des Assurances</p>
                <p>75001 Paris, France</p>
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

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Capital Assurances. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
