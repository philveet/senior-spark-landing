
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import SignUp from '@/components/SignUp';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <Benefits />
        <Testimonials />
        <SignUp />
      </main>
      <Footer />
      
      {/* Accessibility features */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          aria-label="Accessibility options" 
          className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m17.8 9-8 8"/>
            <path d="m6.2 9 8 8"/>
          </svg>
        </button>
      </div>
      
      {/* Add custom styles for the site */}
      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        :global(.animate-text-reveal) {
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
          transform: translateY(20px);
        }
        
        :global(.animate-scale-in) {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        :global(.animate-float) {
          animation: float 6s ease-in-out infinite;
        }
        
        :global(.animated-underline) {
          position: relative;
        }
        
        :global(.animated-underline::after) {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        
        :global(.animated-underline:hover::after) {
          width: 100%;
        }
        
        :global(.btn-primary) {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          font-weight: 500;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        
        :global(.btn-primary:hover) {
          background-color: hsl(var(--primary) / 0.9);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        :global(.btn-ghost) {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: transparent;
          color: hsl(var(--foreground));
          font-weight: 500;
          border: 1px solid hsl(var(--border));
          border-radius: 0.375rem;
          transition: all 0.3s ease;
        }
        
        :global(.btn-ghost:hover) {
          background-color: hsl(var(--accent));
          border-color: transparent;
          transform: translateY(-2px);
        }
        
        :global(h1) {
          font-size: 3.5rem;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
        
        :global(h2) {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
        
        @media (max-width: 640px) {
          :global(h1) {
            font-size: 2.5rem;
          }
          
          :global(h2) {
            font-size: 2rem;
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;
