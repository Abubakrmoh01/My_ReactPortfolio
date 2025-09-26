import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Heart, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Problem-Focused',
      description: 'I approach every challenge with a solution-oriented mindset, breaking down complex problems into manageable, actionable steps.'
    },
    {
      icon: Heart,
      title: 'Quality-Driven',
      description: 'Writing clean, maintainable code is not just a practice—it\'s a passion. I believe in doing things right the first time.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and so do I. I\'m committed to staying current with the latest tools and best practices.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'I love exploring new technologies and finding creative ways to solve problems more efficiently and effectively.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Photo */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1.5 hover-scale">
                <div className="w-full h-full rounded-full bg-card border-2 border-background shadow-xl overflow-hidden">
                  <img src="/profile-home.jpg" alt="Abubakr Mohamed" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software developer with a love for creating efficient, scalable solutions 
            that make a real difference in people's lives.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Professional Journey */}
          <div className="lg:col-span-2 space-y-8 animate-fade-in-up animate-delay-200">
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">My Professional Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey into software development began with a fascination for problem-solving and 
                  the endless possibilities that technology offers. What started as curiosity has evolved 
                  into a passionate career dedicated to building meaningful applications.
                </p>
                <p>
                  I specialize in <strong className="text-foreground">C# and .NET development</strong>, 
                  with extensive experience in building desktop applications using WinForms and web 
                  applications with modern frameworks. My expertise extends to database design and 
                  optimization with SQL Server, ensuring robust data management for enterprise-level applications.
                </p>
                <p>
                  One of my proudest achievements is the development of the <strong className="text-foreground">
                  DVLD (Driving and Vehicle License Department) System</strong>, a comprehensive application 
                  that streamlines license management processes. This project showcases my ability to handle 
                  complex business logic, user interface design, and database architecture.
                </p>
                <p>
                  Beyond technical skills, I'm passionate about continuous learning and staying updated with 
                  industry trends. I've completed over 10 professional certifications and am always exploring 
                  new technologies to enhance my skill set.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Learning Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p>
                  I believe that the best developers are lifelong learners. Technology moves fast, and 
                  staying relevant means embracing change and continuously expanding your knowledge base. 
                  Whether it's mastering a new framework, understanding emerging patterns, or diving deep 
                  into system architecture, I approach every learning opportunity with enthusiasm.
                </p>
                <p className="mt-4">
                  My approach to learning is hands-on and practical. I don't just read about new technologies—I 
                  build with them. This philosophy has served me well throughout my career and continues to 
                  drive my professional growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Facts */}
          <div className="animate-fade-in-up animate-delay-400">
            <Card className="gradient-card mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-foreground font-medium">Remote/Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-foreground font-medium">4+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Primary Stack</span>
                  <span className="text-foreground font-medium">C# / .NET / React</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Certifications</span>
                  <span className="text-foreground font-medium">30+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="text-foreground font-medium">Arabic, English</span>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Career Goals</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  I'm focused on growing as a full-stack developer while deepening my expertise in 
                  system architecture and cloud technologies.
                </p>
                <p>
                  My goal is to contribute to projects that have meaningful impact, whether that's 
                  improving business processes, enhancing user experiences, or solving complex 
                  technical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className={`text-center shadow-card animate-fade-in-up animate-delay-${index * 100}`}>
                  <CardContent className="pt-8">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up">
          <Card className="gradient-card max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Want to Know More?</h2>
              <p className="text-muted-foreground mb-8">
                Check out my skills, projects, and certifications to get a complete picture of my capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/skills">
                    Explore My Skills
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">View My Projects</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;