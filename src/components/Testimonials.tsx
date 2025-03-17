
import React, { useState, useEffect } from 'react';
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { StarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Margaret W.",
      age: 72,
      location: "Florida",
      text: "I never thought I'd learn to use a computer at my age, but the Technology Basics course was perfect. The instructor was patient and the materials were easy to follow.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      stars: 5
    },
    {
      name: "Robert K.",
      age: 68,
      location: "Arizona",
      text: "The Digital Photography course rekindled my passion for taking pictures. Now I can edit my photos and share them with my grandchildren online!",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      stars: 5
    },
    {
      name: "Barbara M.",
      age: 65,
      location: "Michigan",
      text: "After retirement, I felt lost. The Creative Writing course gave me purpose and connected me with other seniors who share my interests.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      stars: 5
    }
  ];

  // Auto-scroll for mobile view
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [isMobile, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Success Stories</p>
          </div>
          <h2 className="mb-6">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from seniors like you who have transformed their lives through learning with us.
          </p>
        </div>

        {isMobile ? (
          // Mobile Carousel View
          <div className="relative px-4">
            <div 
              className="overflow-hidden" 
              style={{ touchAction: 'pan-y' }}
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card overflow-hidden border border-border h-full transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}'s portrait`} 
                            className="w-full h-full object-cover object-center"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-3 left-6 flex">
                            {renderStars(testimonial.stars)}
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.age}, {testimonial.location}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-primary/30'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Mobile Navigation Buttons */}
            <button 
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-background/80 rounded-full p-1 shadow-md z-10"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button 
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-background/80 rounded-full p-1 shadow-md z-10"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        ) : (
          // Desktop Grid View
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card overflow-hidden border border-border h-full transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}'s portrait`} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 left-6 flex">
                      {renderStars(testimonial.stars)}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.age}, {testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
