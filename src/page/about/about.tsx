import { Button } from "../../components/ui/aboutButton";
import { Card } from "../../components/ui/aboutCart";
import { Bike, Clock, MapPin, Shield, Star, Users, Wrench } from "lucide-react";

export const AboutPage = () => {
  const features = [
    { icon: Shield, title: "Quality Guarantee", description: "Every bike is thoroughly inspected and tested" },
    { icon: Wrench, title: "Expert Service", description: "Professional maintenance and repairs" },
    { icon: Users, title: "Community Rides", description: "Weekly group rides for all skill levels" },
    { icon: Clock, title: "Extended Hours", description: "Open 7 days a week for your convenience" }
  ];

  const testimonials = [
    {
      text: "The best bicycle shop I've ever visited. Their expertise and service are unmatched.",
      author: "Sarah Mitchell",
      role: "Mountain Biking Enthusiast"
    },
    {
      text: "They helped me find the perfect bike for my needs. Couldn't be happier!",
      author: "James Wilson",
      role: "Daily Commuter"
    }
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&q=80&w=2074')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen backdrop-blur-sm bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <Bike className="w-10 h-10 text-indigo-400" />
              <span className="text-2xl font-bold text-white">VeloVista</span>
            </div>
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Contact Us
            </Button>
          </nav>

          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Discover Your Perfect Ride
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              At VeloVista, we're more than just a bike shop. We're a community of cycling enthusiasts dedicated to helping you find your perfect ride and maintaining it for years to come.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg py-6 px-8">
              Explore Our Collection
            </Button>
          </div>

          {/* Mission Statement */}
          <Card className="bg-white/10 backdrop-blur-md border-0 shadow-2xl p-8 mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                To inspire and enable everyone to experience the joy of cycling by providing exceptional bikes, expert service, and fostering a vibrant cycling community. We believe that every ride has the potential to change lives, promote sustainability, and create lasting memories.
              </p>
            </div>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-0 shadow-xl p-6">
                <feature.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-0 shadow-xl p-8">
                <Star className="w-8 h-8 text-yellow-400 mb-4" />
                <p className="text-gray-200 text-lg mb-4">{testimonial.text}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Location Section */}
          <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Visit Our Store</h2>
                <div className="flex items-start gap-2 text-gray-200 mb-2">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>123 Cycling Avenue</p>
                    <p>Bike District, BK 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-200">
                  <Clock className="w-5 h-5 mt-1" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Get Directions
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

