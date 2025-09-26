import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Database, Shield, Users, FileText, Calendar, CheckCircle } from 'lucide-react';

const Projects = () => {
  const dvldFeatures = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user registration, authentication, and role-based access control.'
    },
    {
      icon: FileText,
      title: 'License Management',
      description: 'Complete license lifecycle management from application to renewal and replacement.'
    },
    {
      icon: Calendar,
      title: 'Test Scheduling',
      description: 'Automated scheduling system for vision, written, and practical driving tests.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Robust database design with optimized queries and data integrity constraints.'
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'Secure user authentication, data encryption, and audit logging capabilities.'
    },
    {
      icon: CheckCircle,
      title: 'Application Processing',
      description: 'Streamlined workflow for processing license applications and renewals.'
    }
  ];

  const technicalHighlights = [
    '3-Layer Architecture (Presentation, Business Logic, Data Access)',
    'Custom User Controls for Reusable UI Components',
    'Stored Procedures for Optimized Database Operations',
    'Data Validation and Error Handling',
    'Role-Based Access Control System',
    'Comprehensive Logging and Audit Trail',
    'Modular Design for Easy Maintenance',
    'Efficient Memory Management'
  ];

  const technologies = [
    { name: 'C#', type: 'language' },
    { name: 'WinForms', type: 'framework' },
    { name: 'SQL Server', type: 'database' },
    { name: '.NET Framework', type: 'platform' },
    { name: 'ADO.NET', type: 'data' },
    { name: 'Stored Procedures', type: 'database' }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-6">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my flagship project and technical expertise through real-world applications.
          </p>
        </div>

        {/* DVLD System - Main Project */}
        <div className="mb-16">
          <Card className="gradient-card animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl text-foreground">
                  DVLD Management System
                </CardTitle>
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  Featured Project
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg mt-4">
                A comprehensive Driving and Vehicle License Department management system built with C# and WinForms, 
                streamlining the entire license management process from application to issuance.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Project Overview */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Project Overview</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The DVLD system is a desktop application designed to modernize and streamline the operations 
                      of a Driving and Vehicle License Department. It handles everything from user registration and 
                      test scheduling to license issuance and renewal processes.
                    </p>
                    <p>
                      Built using a 3-layer architecture pattern, the system ensures separation of concerns, 
                      maintainability, and scalability. The application manages complex business logic while 
                      providing an intuitive user interface for both staff and administrators.
                    </p>
                    <p>
                      This project demonstrates my ability to handle enterprise-level applications with complex 
                      business requirements, database design, and user interface development.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technical Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge 
                        key={tech.name} 
                        variant="outline" 
                        className="border-primary/30 text-primary"
                      >
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Development Time</span>
                      <span className="text-foreground font-medium">2.5 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Code Lines</span>
                      <span className="text-foreground font-medium">10,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Database Tables</span>
                      <span className="text-foreground font-medium">20+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">User Controls</span>
                      <span className="text-foreground font-medium">30+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dvldFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={feature.title} className={`shadow-card animate-fade-in-up animate-delay-${index * 100}`}>
                        <CardContent className="pt-6">
                          <Icon className="w-8 h-8 text-primary mb-3" />
                          <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Technical Highlights */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Technical Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {technicalHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group">
                 <a   href="https://github.com/Abubakrmoh01/Full-Real-Project-DVLD" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  View Source Code
                </a>
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Projects */}
        <div className="animate-fade-in-up">
          <Card className="gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                I'm continuously working on new projects to expand my portfolio and explore emerging technologies. 
                Some upcoming areas of focus include:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Web API Development with .NET Core',
                  'Modern React Applications',
                  'Cloud-Based Solutions with Azure',
                  'Microservices Architecture',
                  'Real-time Applications with SignalR',
                  'Mobile App Development'
                ].map((project) => (
                  <div key={project} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{project}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Stay tuned for more exciting projects, or let's discuss how we can work together on your next idea!
                </p>
                <Button asChild>
                  <a href="/contact">Let's Collaborate</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;