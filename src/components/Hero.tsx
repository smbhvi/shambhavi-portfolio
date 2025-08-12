import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
            Shambhavi
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Electronics & Communication Graduate | Aspiring Data Analyst / Python Developer
          </h2>
          <p className="text-lg md:text-xl text-accent-foreground mb-8 font-medium italic">
            Turning data into insights & code into solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;