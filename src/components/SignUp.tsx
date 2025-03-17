
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send data to a backend
    console.log("Form submitted");
    alert("Thank you for signing up! We'll be in touch soon.");
  };

  return (
    <section id="signup" className="py-20 px-6 md:px-10 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Join Our Community</p>
          </div>
          <h2 className="mb-6">Start Your Learning Journey Today</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign up now and get access to your first course free! Our team will help you select the perfect learning path.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-semibold">Why Join Senior University?</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span>Access to <strong>50+ courses</strong> specifically designed for seniors</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span><strong>Supportive community</strong> of lifelong learners</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span><strong>Flexible learning schedule</strong> - learn at your own pace</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span><strong>One-on-one support</strong> from our dedicated team</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <span><strong>Money-back guarantee</strong> if you're not satisfied</span>
              </li>
            </ul>

            <Collapsible open={open} onOpenChange={setOpen} className="bg-card rounded-lg p-6 border border-border mt-8">
              <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium">
                Frequently Asked Questions
                {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Do I need any special equipment?</h4>
                  <p className="text-muted-foreground">Just a computer or tablet with internet access. Our technical support team can help you get set up.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">What if I'm not tech-savvy?</h4>
                  <p className="text-muted-foreground">Our courses are designed with beginners in mind. We also offer a free Technology Basics course to help you get started.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Can I try before I commit?</h4>
                  <p className="text-muted-foreground">Yes! Your first course is completely free, and we offer a 30-day money-back guarantee on all memberships.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Sign Up Now</CardTitle>
              <CardDescription>Join thousands of seniors learning new skills every day</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 text-lg rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 text-lg rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 text-lg rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(555) 123-4567"
                  />
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <HelpCircle className="h-3 w-3" /> We'll call only to help with course selection
                  </p>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and privacy policy
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md text-lg transition-colors"
                onClick={handleSubmit}
              >
                Sign Up for Free
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
