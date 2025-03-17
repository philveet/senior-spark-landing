
import React from 'react';
import { Monitor, Users, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitProps) => {
  return (
    <div 
      className="bg-card rounded-xl p-6 shadow-sm transition-all hover:shadow-md"
      style={{ 
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `fade-in 0.6s ease-out forwards ${delay}s`
      }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor className="h-7 w-7 text-primary" />,
      title: "User-Friendly Platform",
      description: "Our platform is designed with simplicity in mind. Large text, intuitive navigation, and clear instructions make learning online easy and enjoyable."
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Community Connection",
      description: "Connect with like-minded peers in your age group. Our courses include discussion forums and virtual meetups to foster real connections."
    },
    {
      icon: <Clock className="h-7 w-7 text-primary" />,
      title: "Learn at Your Own Pace",
      description: "No deadlines or pressure. All courses are self-paced, allowing you to learn comfortably on your own schedule, day or night."
    },
    {
      icon: <Shield className="h-7 w-7 text-primary" />,
      title: "Dedicated Support",
      description: "Our patient and friendly support team is just a phone call away. We provide technical assistance whenever you need it."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-16"
          style={{ 
            opacity: 0,
            animation: 'fade-in 0.6s ease-out forwards' 
          }}
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Why Choose Us</p>
          </div>
          <h2 className="mb-6">Benefits Designed for You</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand what matters to our community of lifelong learners aged 60+. Here's how we make online education accessible and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
