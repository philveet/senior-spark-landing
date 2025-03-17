
import React from 'react';
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { StarIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Margaret W.",
      age: 72,
      location: "Florida",
      text: "I never thought I'd learn to use a computer at my age, but the Technology Basics course was perfect. The instructor was patient and the materials were easy to follow.",
      image: "https://images.unsplash.com/photo-1581579438747-20eecd8c438b",
      stars: 5
    },
    {
      name: "Robert K.",
      age: 68,
      location: "Arizona",
      text: "The Digital Photography course rekindled my passion for taking pictures. Now I can edit my photos and share them with my grandchildren online!",
      image: "https://images.unsplash.com/photo-1533083136474-3f4305f5b8ae",
      stars: 5
    },
    {
      name: "Barbara M.",
      age: 65,
      location: "Michigan",
      text: "After retirement, I felt lost. The Creative Writing course gave me purpose and connected me with other seniors who share my interests.",
      image: "https://images.unsplash.com/photo-1505391507565-a41aa7fbbab4",
      stars: 5
    }
  ];

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
      </div>
    </section>
  );
};

export default Testimonials;
