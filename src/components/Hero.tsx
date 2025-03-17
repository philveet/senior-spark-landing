
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-text-reveal');
        }
      },
      { threshold: 0.1 }
    );

    const children = heroRef.current?.querySelectorAll('.hero-text-container > *');
    children?.forEach((child, index) => {
      child.setAttribute('style', `--index: ${index}`);
      observer.observe(child);
    });

    return () => {
      children?.forEach(child => observer.unobserve(child));
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-background -z-10" />
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div ref={heroRef} className="hero-text-container space-y-6">
          <div className="inline-block px-4 py-1.5 bg-accent rounded-full">
            <p className="text-accent-foreground font-medium text-lg">For Curious Minds 60+</p>
          </div>
          
          <h1 className="animate-text-reveal">
            Learn. Grow.<br />
            <span className="text-primary">Stay Curious.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-text-reveal">
            Discover tailored online courses designed specifically for adults 60+ who want to continue learning, growing, and connecting with like-minded peers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-text-reveal">
            <a href="#signup" className="btn-primary text-xl group">
              Sign Up Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </a>
            <a href="#courses" className="btn-ghost text-xl">
              Explore Courses
            </a>
          </div>
          
          <p className="text-muted-foreground animate-text-reveal">
            Join over <span className="font-semibold text-foreground">15,000</span> seniors already learning with us!
          </p>
        </div>
        
        {/* Image container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <div className="absolute w-full h-full overflow-hidden rounded-2xl shadow-xl animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Senior students enjoying online classes together" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
            />
          </div>
          
          {/* Floating achievement badge */}
          <div className="absolute bottom-8 -left-4 md:bottom-12 md:-left-8 bg-white rounded-xl p-4 shadow-lg animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Average completion rate</p>
                <p className="font-semibold text-xl">92%</p>
              </div>
            </div>
          </div>
          
          {/* Floating satisfaction badge */}
          <div className="absolute top-8 -right-4 md:top-12 md:-right-8 bg-white rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905c0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Satisfaction rate</p>
                <p className="font-semibold text-xl">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
