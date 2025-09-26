import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: Skill[];
  color: string;
}

const Skills = () => {
  const [visibleBars, setVisibleBars] = useState<Set<string>>(new Set());

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-blue-400',
      skills: [
        { name: 'C#/C++', level: 90, experience: '2+ years' },
        { name: 'JavaScript', level: 75, experience: '1+ year' },
        { name: 'TypeScript', level: 70, experience: '1+ year' },
        { name: 'Python', level: 60, experience: '6+ months' },
        { name: 'Java', level: 55, experience: '6+ months' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      color: 'text-green-400',
      skills: [
        { name: '.NET Framework', level: 90, experience: '2+ years' },
        { name: '.NET Core', level: 80, experience: '1+ year' },
        { name: 'WinForms', level: 90, experience: '2+ years' },
        { name: 'React', level: 80, experience: '1+ year' },
        { name: 'ASP.NET Web API', level: 70, experience: '1+ year' },
        { name: 'Entity Framework', level: 75, experience: '1+ year' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      color: 'text-purple-400',
      skills: [
        { name: 'SQL Server', level: 85, experience: '2+ years' },
        { name: 'T-SQL', level: 80, experience: '2+ years' },
        { name: 'Git & GitHub', level: 75, experience: '2+ years' },
        { name: 'Visual Studio', level: 90, experience: '2+ years' },
        { name: 'VS Code', level: 80, experience: '1+ year' },
      ]
    },
    {
      title: 'Professional Skills',
      icon: Users,
      color: 'text-orange-400',
      skills: [
        { name: 'Problem Solving', level: 90, experience: 'Always' },
        { name: 'Team Collaboration', level: 85, experience: 'Always' },
        { name: 'Code Review', level: 80, experience: '1+ year' },
        { name: 'Project Management', level: 75, experience: '1+ year' },
        { name: 'Documentation', level: 80, experience: '2+ years' },
        { name: 'Agile/Scrum', level: 70, experience: '1+ year' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleBars(prev => new Set([...prev, entry.target.id]));
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        const element = document.getElementById(`${category.title}-${skill.name}`);
        if (element) {
          observer.observe(element);
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (level: number) => {
    if (level >= 85) return { text: 'Expert', color: 'bg-green-500' };
    if (level >= 70) return { text: 'Advanced', color: 'bg-blue-500' };
    if (level >= 55) return { text: 'Intermediate', color: 'bg-yellow-500' };
    return { text: 'Beginner', color: 'bg-gray-500' };
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-6">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise, continuously growing through 
            hands-on experience and dedicated learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className={`gradient-card animate-fade-in-up animate-delay-${categoryIndex * 200}`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => {
                    const skillId = `${category.title}-${skill.name}`;
                    const isVisible = visibleBars.has(skillId);
                    const skillLevelInfo = getSkillLevel(skill.level);

                    return (
                      <div key={skill.name} id={skillId} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="secondary" className={`text-xs ${skillLevelInfo.color} text-white`}>
                              {skillLevelInfo.text}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">{skill.experience}</span>
                            <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="skill-bar h-2">
                          <div
                            className={`skill-progress h-full ${isVisible ? `w-[${skill.level}%]` : 'w-0'}`}
                            style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications Preview */}
        <div className="text-center animate-fade-in-up">
          <Card className="gradient-card max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Professional Development</h2>
              <p className="text-muted-foreground mb-6">
                I've earned 30+ professional certifications from Programming Advices,EDRAAK,ITI and continue to 
                pursue additional training to stay current with industry best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'C#/C++ Programming',
                  'Software Engineering',
                  'Data Structures',
                  'Algorithms',
                  'AI FOR Evrey One',
                  'SOFT-SKILLS',
                  'OOP Concepts',
                  'Database Design',
                  'Problem Solving',
                  'T-SQL/ SQL Server'
                ].map((cert) => (
                  <Badge key={cert} variant="outline" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;