
import React from 'react';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Clock, Users, BookOpen, ExternalLink } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Technology Basics",
      description: "Master the fundamentals of computers, smartphones, and the internet at your own pace.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      duration: "4 weeks",
      students: 3240,
      level: "Beginner",
      category: "Technology"
    },
    {
      title: "Digital Photography",
      description: "Learn to take beautiful photos and edit them using simple, senior-friendly software.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
      duration: "6 weeks",
      students: 2180,
      level: "Beginner to Intermediate",
      category: "Creative Arts"
    },
    {
      title: "Healthy Cooking",
      description: "Discover nutritious recipes and cooking techniques to support your health and wellbeing.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
      duration: "8 weeks",
      students: 4150,
      level: "All Levels",
      category: "Health & Wellness"
    },
    {
      title: "Mindfulness & Meditation",
      description: "Reduce stress and enhance your mental wellbeing with guided practices and techniques.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      duration: "4 weeks",
      students: 5620,
      level: "All Levels",
      category: "Health & Wellness"
    }
  ];

  return (
    <section id="courses" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Popular Courses</p>
          </div>
          <h2 className="mb-6">Featured Learning Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular courses designed specifically for seniors who want to learn new skills in a supportive environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="h-full flex flex-col transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary mr-2">
                    {course.category}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                    {course.level}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold line-clamp-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground line-clamp-3">{course.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 pt-0">
                <div className="w-full flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students.toLocaleString()}+ students</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="w-full flex justify-center items-center py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Learn More</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="group inline-flex items-center text-lg font-medium text-primary hover:text-primary/80"
          >
            View All Courses
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
