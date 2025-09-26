import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Award, Calendar, Code, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const texts = [
    'Software Developer',
    'Problem Solver',
    'Continuous Learner',
    'Full-Stack'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentCharIndex(0);
        setDisplayText('');
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentTextIndex, texts]);

  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '4+' },
    { icon: Code, label: 'Major Projects', value: '10+' },
    { icon: Award, label: 'Certifications', value: '30+' },
    { icon: Users, label: 'Happy Clients', value: '50+' }
  ];

  const technologies = [
    { name: 'C#', color: 'text-purple-400' },
    { name: 'C++', color: 'text-purple-400' },
    { name: '.NET Core', color: 'text-blue-400' },
    { name: 'SQL Server', color: 'text-red-400' },
    { name: 'T-SQL', color: 'text-White-400' },
    { name: 'React/Router', color: 'text-cyan-400' },
    { name: 'PHP', color: 'text-red-400' },
    { name: 'Laravel', color: 'text-red-400' },
    { name: 'WinForms', color: 'text-green-400' },
    { name: 'Web API', color: 'text-orange-400' },
    { name: 'html', color: 'text-blue-400' },
    { name: 'Tailwind-Css', color: 'text-yellow-400' },

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="order-2 lg:order-1 flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-64 h-64 bg-gradient-to-br from-primary to-primary/60 rounded-full p-2">
                  <div className="w-full h-full rounded-full bg-card border-4 border-background shadow-2xl overflow-hidden">
                    <img src="/profile-home.jpg" alt="Abubakr Mohamed" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="gradient-primary bg-clip-text text-transparent">Abubakr Mohamed</span>
              </h1>
              <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
                <span className="inline-block">I'm a </span>
                <span className="text-primary font-semibold min-w-[200px] inline-block text-left">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl lg:mx-0 mx-auto mb-10 leading-relaxed">
                 a Software Engineer and Full Stack Developer with expertise in C#, .NET, SQL, and modern web technologies. I build scalable applications from front-end to back-end,
                 combining clean code with problem-solving skills to deliver impactful digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group" asChild>
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="/Abubakr_Mohamed_CV_Final.pdf" download="Abubakr_Mohamed_CV.pdf">
                    <Download className="mr-2" size={20} />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className={`text-center shadow-card animate-fade-in-up animate-delay-${index * 200}`}>
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technologies I Work With</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experienced in a variety of programming languages, frameworks, and tools for building modern applications.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`tech-icon px-6 py-3 bg-card rounded-lg border border-border ${tech.color} font-semibold text-lg animate-fade-in-up animate-delay-${index * 100}`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Interested in collaborating? I'm always open to discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Abubakr_Mohamed_CV_Final.pdf" download="Abubakr_Mohamed_CV.pdf">
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="p-3" asChild>
                <a href="https://github.com/Abubakrmoh01" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="p-3" asChild>
                <a href="https://www.linkedin.com/in/abubakr-mohamed-54314a304" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;