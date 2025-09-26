import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Calendar, ExternalLink, BookOpen, Code } from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: 'C#/C++ Programming Fundamentals',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Programming Language',
      status: 'Completed'
    },
    {
      title: 'AI For Backend Engineers (Go, Node.js, Laravel)',
      provider: 'Yahya ElAraby-(yehia.tech)',
      date: '2025',
      type: 'AI-SKILLS',
      status: 'Completed'
    },
    {
      title: 'Object-Oriented Programming (OOP)',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Programming Concepts',
      status: 'Completed'
    },
    {
      title: 'Data Structures & Algorithms',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Computer Science',
      status: 'Completed'
    },
    {
      title: 'SQL Server Database Management',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Database',
      status: 'Completed'
    },
    {
      title: 'Advanced T-SQL Queries',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Database',
      status: 'Completed'
    },
    {
      title: 'Windows Forms Application Development',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Framework',
      status: 'Completed'
    },
    {
      title: 'Problem Solving Techniques',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Methodology',
      status: 'Completed'
    },
    {
      title: 'Software Engineering Principles',
      provider: '(FCI-ZU)',
      date: '2021-2024',
      type: 'Software Engineering',
      status: 'Completed'
    },
    {
      title: 'Project Management Fundamentals',
      provider: 'Programming Advices & EDRAAK ',
      date: '2023',
      type: 'Management',
      status: 'Completed'
    },
    {
      title: 'Clean Code Practices',
      provider: 'Programming Advices',
      date: '2023',
      type: 'Best Practices',
      status: 'Completed'
    },
    {
      title: 'SOFT-SKILLS',
      provider: 'Programming Advices& Mangment DOSE & EDRAAK',
      date: '2020-2025',
      type: 'SKILLS',
      status: 'Completed'
    }
  ];

  const learningPath = [
    {
      phase: 'Foundation',
      description: 'Built strong fundamentals in programming concepts and C# language',
      skills: ['C# Syntax', 'OOP Concepts', 'Problem Solving', 'Basic Algorithms']
    },
    {
      phase: 'Database Mastery',
      description: 'Mastered database design, SQL querying, and data management',
      skills: ['SQL Server', 'T-SQL', 'Database Design', 'Stored Procedures']
    },
    {
      phase: 'Application Development',
      description: 'Learned to build complete desktop applications with modern patterns',
      skills: ['WinForms', 'UI/UX Design', 'Event Handling', 'Data Binding']
    },
    {
      phase: 'Professional Growth',
      description: 'Focused on software engineering principles and industry best practices',
      skills: ['Clean Code', 'Design Patterns', 'Testing', 'Documentation']
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Programming Language': 'bg-blue-500',
      'Programming Concepts': 'bg-purple-500',
      'Computer Science': 'bg-green-500',
      'Database': 'bg-orange-500',
      'Framework': 'bg-cyan-500',
      'Methodology': 'bg-pink-500',
      'Engineering': 'bg-indigo-500',
      'Management': 'bg-yellow-500',
      'Best Practices': 'bg-red-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-6">Education & Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My commitment to continuous learning through formal education and professional certifications.
          </p>
        </div>

        {/* Academic Background */}
        <div className="mb-16 animate-fade-in-up animate-delay-200">
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-foreground">Academic Background</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">B.Sc. in IT- Computer Science </h3>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">2021 - 2024</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">Faculty of Computers & Informatics-Zagazig University (FCI-ZU)</p>
                  <p className="text-muted-foreground">
                    Comprehensive study of computer science fundamentals including algorithms, data structures, 
                    software engineering, and database management. Developed strong analytical and 
                    problem-solving skills essential for modern software development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Journey */}
        <div className="mb-16 animate-fade-in-up animate-delay-400">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Learning Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((phase, index) => (
              <Card key={phase.phase} className={`shadow-card animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{phase.phase}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16 animate-fade-in-up animate-delay-600">
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Award className="w-8 h-8 text-primary" />
                <span className="text-foreground">Professional Certifications</span>
                <Badge variant="default" className="bg-success text-success-foreground">
                  10+ Completed
                </Badge>
              </CardTitle>
              <p className="text-muted-foreground mt-4">
                Comprehensive certifications from Programming Advices covering essential software development skills 
                and industry best practices.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className={`p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors animate-fade-in-up animate-delay-${index * 50}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <BookOpen className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <Badge className={`text-xs text-white ${getTypeColor(cert.type)}`}>
                        {cert.type}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-sm">{cert.title}</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Provider:</span>
                        <span className="text-foreground font-medium">{cert.provider}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="text-foreground font-medium">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Continuous Learning */}
        <div className="animate-fade-in-up">
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <Code className="w-8 h-8 text-primary" />
                <span className="text-foreground">Continuous Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-foreground mb-4">My Learning Philosophy</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Technology is constantly evolving, and I believe that continuous learning is essential 
                      for any successful developer. My approach to learning combines formal education, 
                      hands-on practice, and real-world application.
                    </p>
                    <p>
                      Each certification I've earned represents not just knowledge gained, but skills 
                      applied in practical projects. I don't just study concepts—I implement them, 
                      experiment with them, and use them to solve real problems.
                    </p>
                    <p>
                      Looking ahead, I'm excited to continue expanding my skills in cloud technologies, 
                      modern web frameworks, and emerging development practices.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Currently Exploring</h3>
                  <div className="space-y-3">
                    {[
                      'ASP.NET Core Web API',
                      'React & Modern Frontend',
                      'Azure Cloud Services',
                      'Microservices Architecture',
                      'Mobile Development'
                    ].map((topic) => (
                      <div key={topic} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="group">
                 <a   href="https://www.linkedin.com/in/abubakr-mohamed-54314a304/details/certifications/" target="_blank" rel="noopener noreferrer">
                  View ALL Certifications
                </a>
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;