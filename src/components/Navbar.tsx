import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/1616b15a-3a62-4e44-9f8f-fd9b069757b9.png"
                alt="Capital Assurances Logo"
                className="h-24 w-auto max-w-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/assurances"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Assurances
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-black hover:text-primary font-medium transition-colors">
                Mentions légales <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/mentions-legales" className="w-full">
                    Mentions légales
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/rgpd" className="w-full">
                    RGPD
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cgv" className="w-full">
                    CGV
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-4">
            <Link
              to="/"
              className="block text-black hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/assurances"
              className="block text-black hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Assurances
            </Link>
            <Link
              to="/contact"
              className="block text-black hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-2">
              <div className="font-medium py-2">Mentions légales</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/mentions-legales"
                  className="block text-black hover:text-primary py-1"
                  onClick={toggleMenu}
                >
                  Mentions légales
                </Link>
                <Link
                  to="/rgpd"
                  className="block text-black hover:text-primary py-1"
                  onClick={toggleMenu}
                >
                  RGPD
                </Link>
                <Link
                  to="/cgv"
                  className="block text-black hover:text-primary py-1"
                  onClick={toggleMenu}
                >
                  CGV
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
