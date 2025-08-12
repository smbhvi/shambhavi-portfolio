import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "CNS Trainee",
      company: "AAI, Patna",
      period: "May 2023 – Jun 2023",
      description: "Learned VHF, antennas, transmitters, and receivers in aviation communication and navigation systems.",
      type: "Training"
    },
    {
      title: "Data Analyst Intern",
      company: "CodeAlpha",
      period: "Jul 2025 – Aug 2025",
      description: "Performed web scraping and EDA for actionable insights.",
      type: "Internship"
    },
    {
      title: "Python Developer Intern",
      company: "BroskiesHub",
      period: "Aug 2025 – Sep 2025",
      description: "Developed Python scripts, debugged code, and delivered solutions to task requirements.",
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                  <div className="mt-3">
                    <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {exp.type}
                    </span>
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

export default Experience;