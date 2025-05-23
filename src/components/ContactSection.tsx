
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs du formulaire.");
      return;
    }
    
    // Simulate form submission
    toast.success("Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Contactez-nous
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider?"
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Envoyer la demande
                </Button>
              </form>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/lovable-uploads/96324fe5-bfa1-40fe-96d3-a6cb1aeef778.png"
                alt="Contact"
                className="w-full h-auto rounded-lg object-cover"
                onError={(e) => {
                  console.error("Contact image failed to load", e);
                  e.currentTarget.src = "/lovable-uploads/contact.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
