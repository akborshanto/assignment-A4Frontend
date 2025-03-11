import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Tag, Truck, Shield, Quote, ThumbsUp, Camera, MessageCircle } from 'lucide-react';
import { Button } from './ui/aboutButton';
const customerReviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: '2024-03-15',
    title: 'Perfect for mountain trails',
    review: "The Mountain Explorer Pro exceeded all my expectations. The suspension system handles rough terrain beautifully, and the build quality is exceptional. I've taken it on several challenging trails, and it performs flawlessly.",
    helpful: 45,
    images: [
      'https://images.unsplash.com/photo-1622762918456-cce865079922?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?auto=format&fit=crop&q=80&w=600'
    ],
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: '2024-03-10',
    title: 'Best urban commuter bike',
    review: "I use the Urban Commuter Elite for my daily commute, and it's been a game-changer. The lightweight frame makes it easy to maneuver through city traffic, and the built-in lights are a great safety feature. Highly recommend!",
    helpful: 32,
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1622762918456-cce865079922?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?auto=format&fit=crop&q=80&w=600'
    ],
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 4,
    date: '2024-03-05',
    title: 'Great value for money',
    review: "The Road Master Race is a serious piece of equipment. The carbon frame is incredibly light, and the gear shifting is butter smooth. While it's on the pricier side, the quality justifies the cost. Perfect for serious cyclists.",
    helpful: 28,
    images: [
      'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=600'
    ],
    verified: true
  }
];

const specialOffers = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Get up to 30% off on selected mountain bikes',
    image: 'https://images.unsplash.com/photo-1622762918456-cce865079922?auto=format&fit=crop&q=80&w=1200',
    discount: '30%',
    endDate: '2024-08-31'
  },
  {
    id: 2,
    title: 'Bundle Deal',
    description: 'Buy any bike and get a free maintenance kit',
    image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&q=80&w=1200',
    discount: 'Free Kit',
    endDate: '2024-07-15'
  }
];

export const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

    {/* Customer Reviews Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8    bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Riders Say
            </h2>
            <p className="mt-2 text-gray-600">
              Real experiences from our valued customers who've taken our bikes on countless adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {customerReviews.map((review) => (
              <motion.div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-6 sm:p-8 ">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {review.name}
                            {review.verified && (
                              <span className="ml-2 text-sm text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-yellow-400 fill-current"
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful ({review.helpful})
                        </Button>
                      </div>

                      <h4 className="text-xl font-semibold text-gray-900 mt-4">
                        {review.title}
                      </h4>
                      <p className="mt-2 text-gray-600">
                        <Quote className="w-5 h-5 text-gray-400 inline mr-2" />
                        {review.review}
                      </p>

                      {review.images && review.images.length > 0 && (
                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Camera className="w-5 h-5 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">
                              Customer Photos
                            </span>
                          </div>
                          <div className="flex gap-4 overflow-x-auto pb-2">
                            {review.images.map((image, index) => (
                              <img
                                key={index}
                                src={image}
                                alt={`Review photo ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              View All Reviews
            </Button>
          </div>
        </div>
      </section>
      {/* Special Offers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Special Offers
            </h2>
            <p className="mt-2 text-gray-600">
              Don't miss out on these amazing deals and exclusive offers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialOffers.map((offer) => (
              <motion.div
                key={offer.id}
                className="relative overflow-hidden bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-blue-500" />
                      <span className="text-blue-500 font-semibold">Save {offer.discount}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-6">{offer.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Truck className="w-5 h-5" />
                        <span>Free shipping on all orders</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Shield className="w-5 h-5" />
                        <span>2-year warranty included</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-4">
                        Offer ends: {new Date(offer.endDate).toLocaleDateString()}
                      </p>
                      <Button >
                        Shop Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};