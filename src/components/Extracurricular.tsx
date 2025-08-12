import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Trophy } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      title: "Volunteer",
      organization: "Tarumitra",
      description: "Organized fundraising events, managed logistics, and coordinated teams.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Member",
      organization: "Basketball Club",
      description: "Organized events and activities.",
      icon: <Trophy className="h-6 w-6" />
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Extracurricular Activities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      {activity.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {activity.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;