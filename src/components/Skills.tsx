import { Code, Database, BarChart3, Brain, Users, Clock, Lightbulb, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "SQL"]
    },
    {
      title: "Libraries",
      icon: <Database className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Tools",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Power BI", "Excel", "Jupyter Notebooks"]
    },
    {
      title: "Concepts",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Exploratory Data Analysis (EDA)", "Data Cleaning", "Data Visualization"]
    }
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Time Management", icon: <Clock className="h-5 w-5" /> },
    { name: "Problem-solving", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Team Collaboration", icon: <Users className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
            <h3 className="font-semibold text-card-foreground mb-4 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                  <div className="text-primary">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-accent-foreground font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;