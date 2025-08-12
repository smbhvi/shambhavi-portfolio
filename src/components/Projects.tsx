import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, MapPin, Globe, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GPS-Based Plot Extraction",
      description: "Analyzed GPS data and identified farm plot clusters using K-Means clustering. Plotted boundaries and clusters using Shapely and Matplotlib.",
      icon: <MapPin className="h-6 w-6" />,
      technologies: ["Python", "K-Means", "Shapely", "Matplotlib", "GPS Data"],
      github: "#",
      demo: "#"
    },
    {
      title: "Web Scraping & EDA",
      description: "Collected and processed data via web scraping, performed EDA to identify patterns and trends (CodeAlpha Internship).",
      icon: <Globe className="h-6 w-6" />,
      technologies: ["Python", "Web Scraping", "EDA", "Data Analysis", "Pandas"],
      github: "#",
      demo: "#"
    },
    {
      title: "Python Development Tasks",
      description: "Developed scripts and mini-projects for automation, coding, and debugging (BroskiesHub Internship).",
      icon: <Code className="h-6 w-6" />,
      technologies: ["Python", "Automation", "Scripting", "Debugging", "Problem Solving"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;