
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-foreground pt-16 pb-8 px-6 md:px-10 text-muted-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-3">
              <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-xl font-bold">SU</span>
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                Senior University
              </span>
            </a>
            <p className="text-lg">
              Empowering seniors with accessible, enjoyable online education since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Course Catalog</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Learning Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Technology Help</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Community Forum</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Press</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>1-800-SENIOR-U (1-800-736-4678)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@senioruniversity.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="mb-2 font-medium text-foreground">Hours of Operation:</p>
              <p>Monday - Friday: 8am - 8pm EST</p>
              <p>Saturday: 9am - 5pm EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-base">
            &copy; {currentYear} Senior University. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
