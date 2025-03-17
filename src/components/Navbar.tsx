
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4 backdrop-blur-md",
        isScrolled ? "bg-background/95 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground text-xl font-bold">SU</span>
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            Senior University
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#courses" className="text-lg font-medium animated-underline">Courses</a>
          <a href="#benefits" className="text-lg font-medium animated-underline">Benefits</a>
          <a href="#testimonials" className="text-lg font-medium animated-underline">Testimonials</a>
          <a href="#signup" className="btn-primary">Sign Up</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md transition-transform duration-300 ease-in-out z-40",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          <a 
            href="#courses" 
            className="text-2xl font-medium animated-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a 
            href="#benefits" 
            className="text-2xl font-medium animated-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-2xl font-medium animated-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#signup" 
            className="btn-primary text-xl mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
