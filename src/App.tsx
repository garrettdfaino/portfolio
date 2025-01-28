import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  Cog, 
  FileText, 
  Lightbulb, 
  Mail, 
  Github, 
  Linkedin,
  Folder,
  Award
} from 'lucide-react';
import Patents from './pages/Patents';

function Home() {
  const expertiseAreas = [
    "Innovation",
    "SolidWorks",
    "Automation",
    "Mechanical Design",
    "Customer Facing Communication",
    "System Design & Analysis",
    "Design for Manufacturability",
    "Mechatronics",
    "Product Design",
    "3D Printing",
    "Problem Solving",
    "Rapid Prototyping",
    "Design of Experiments",
    "Filling/Packaging"
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedExpertise = [...expertiseAreas, ...expertiseAreas];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">Garrett Faino</h1>
          <h2 className="text-2xl mb-6">Mechanical Engineer</h2>
          <p className="text-xl max-w-4xl leading-relaxed mb-8">
            Versatile engineer with expertise in automation, innovation, and mechanical design. Known for my relentless problem-solving ability, I excel at designing, prototyping, and troubleshooting complex systems, earning multiple patents for innovative solutions. Throughout my career—and my life—I've worked directly with customers, understanding their needs, resolving challenges, and delivering tailored solutions. I've also developed strong skills in website and UI design, leveraging AI tools to create intuitive and engaging digital experiences. By combining technical expertise, creativity, and a customer-centric approach, I deliver impactful solutions across both engineering and design disciplines, whether leading projects or collaborating with dynamic teams.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:john.smith@email.com" className="flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://github.com" className="text-white hover:text-blue-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-200 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Patents Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Patents</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Browse through my registered patents and pending applications in mechanical systems and renewable energy.
            </p>
            <Link to="/patents" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              View Patents <FileText size={18} />
            </Link>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Projects</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore my portfolio of innovative engineering projects and successful implementations.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              View Projects <Folder size={18} />
            </button>
          </div>

          {/* Innovations Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Innovations</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Discover my contributions to mechanical engineering innovation and research.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              Learn More <FileText size={18} />
            </button>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Featured Project</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" 
              alt="Engineering project" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Renewable Energy System Design</h3>
              <p className="text-gray-600 mb-4">
                Led the design and implementation of an innovative solar thermal system
                that improved energy efficiency by 40% compared to traditional systems.
                The project received recognition at the International Engineering Summit 2023.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Expertise Areas</h2>
          <div className="relative overflow-hidden bg-white rounded-xl shadow-lg p-8">
            <div 
              className="flex gap-8 animate-scroll"
              style={{
                width: 'max-content'
              }}
            >
              {duplicatedExpertise.map((expertise, index) => (
                <div
                  key={`${expertise}-${index}`}
                  className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-white px-6 py-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <p className="text-lg font-medium text-blue-900 whitespace-nowrap">{expertise}</p>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 John Smith. All rights reserved.</p>
            <p className="mt-2">Professional Mechanical Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patents" element={<Patents />} />
    </Routes>
  );
}

export default App;