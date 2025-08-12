import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech (Electronics & Communication)",
      institution: "Birla Institute of Technology, Mesra – Patna Campus",
      year: "2020–2024",
      type: "Bachelor's Degree"
    },
    {
      degree: "Intermediate (CBSE)",
      institution: "DAV Public School, Patna",
      year: "2020",
      type: "Higher Secondary"
    },
    {
      degree: "Matriculation (CBSE)",
      institution: "DAV Public School, Patna",
      year: "2018",
      type: "Secondary"
    }
  ];

  const certifications = [
    {
      title: "Power BI",
      provider: "Office Master",
      description: "Report building, interactive dashboards"
    },
    {
      title: "Data Science",
      provider: "Upgrad",
      description: "Statistics, Python, Machine Learning, EDA, regression projects"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Education & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{edu.year}</span>
                        <span className="bg-accent/20 text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                          {edu.type}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {cert.provider}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;