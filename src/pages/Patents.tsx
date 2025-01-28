import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const patents = [
  {
    title: "Check Valve System",
    number: "US10627001B2",
    description: "I identified an opportunity to redesign a check valve as part of a project to innovate products using 3D printing. The original design consisted of 11 separate pieces, requiring 11 assembly steps for manufacturing. Leveraging additive manufacturing and the HP Jet Fusion 3D printer, I consolidated all components into a single, 3D-printed piece. The redesigned valve self-activates when the mixer is placed on the cartridge, achieved by springs pressing past a shoulder to create pressure on the ball, preventing backflow. This innovation eliminated assembly steps, significantly reducing manufacturing time and costs while improving efficiency.",
    images: [
      "/src/assets/patents/check-valve-1.png",
      "/src/assets/patents/check-valve-2.png",
      "/src/assets/patents/check-valve-3.png",
      "/src/assets/patents/check-valve-4.png"
    ],
    url: "https://patents.google.com/patent/US10627001B2"
  },
  {
    title: "Smart Packaging Solution",
    number: "US 11,242,169 B1",
    description: "A revolutionary packaging system that incorporates real-time monitoring and adaptive sealing technology. This invention features an intelligent control system that adjusts packaging parameters based on product characteristics and environmental conditions, resulting in a 40% reduction in packaging defects.",
    images: [
      "https://images.unsplash.com/photo-1598291286794-d417e2685f85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598291286747-05af8ede5191?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598291286778-3cd2bfc5c0c5?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://patents.google.com/patent/US11242169B1"
  },
  {
    title: "Energy-Efficient Cooling System",
    number: "US 12,345,678 B2",
    description: "An advanced cooling system design that utilizes phase-change materials and smart thermal management. The system achieves 30% higher energy efficiency compared to conventional cooling solutions while maintaining precise temperature control. Its innovative heat exchanger design maximizes thermal transfer while minimizing energy consumption.",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458681-9d633fc0f010?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581093458756-9f3c3900df4a?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://patents.google.com/patent/US12345678B2"
  }
];

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full">
      <img 
        src={images[currentIndex]} 
        alt={`Patent diagram ${currentIndex + 1}`}
        className="h-full w-full object-contain bg-white"
      />
      
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-gray-800" size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="text-gray-800" size={24} />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

function Patents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Patents</h1>
        
        <div className="space-y-12">
          {patents.map((patent) => (
            <div 
              key={patent.number}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-[400px]">
                  <ImageCarousel images={patent.images} />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    Patent No. {patent.number}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                    {patent.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {patent.description}
                  </p>
                  <div className="mt-6">
                    <a 
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      View Patent Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Patents;