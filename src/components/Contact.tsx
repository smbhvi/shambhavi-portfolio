import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "shambhavi3007@gmail.com",
      href: "mailto:shambhavi3007@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/smbhvi",
      href: "https://github.com/smbhvi"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9097715715",
      href: "tel:+919097715715"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to turn data into insights and build amazing solutions together
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 text-primary">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-lg">{contact.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="ghost" 
                    className="text-muted-foreground hover:text-primary p-0 h-auto font-normal"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      {contact.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="mailto:shambhavi3007@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;