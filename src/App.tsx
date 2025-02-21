import React from 'react';
import { GithubIcon, Mail, LinkedinIcon, BookOpen, Navigation, Brain, School } from 'lucide-react';

const PersonalWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Gwendal Saliou</h1>
          <p className="text-xl mb-6">Ph.D. Student in Numerical Weather Prediction</p>
          <p className="text-lg opacity-90">Deep Learning | Data Assimilation | Ocean Physics</p>
          
          <div className="flex gap-4 mt-6">
            <a href="mailto:gwendal.saliou@imt-atlantique.net" className="flex items-center gap-2 hover:text-blue-200">
              <Mail size={20} />
              Email
            </a>
            <a href="https://linkedin.com/in/gwendal-saliou" className="flex items-center gap-2 hover:text-blue-200">
              <LinkedinIcon size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" className="flex items-center gap-2 hover:text-blue-200">
              <GithubIcon size={20} />
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a Ph.D. student at IFREMER Plouzane, focusing on integrating deep learning with 
            data assimilation for numerical weather prediction. My research aims to improve 
            forecasting reliability through uncertainty quantification and advanced machine 
            learning techniques.
          </p>
        </section>

        {/* Research Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Research Interests</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Navigation className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Numerical Weather Prediction</h3>
              <p className="text-gray-600">Developing advanced forecasting systems using deep learning and data assimilation</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Brain className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Applying deep learning techniques to improve weather forecast accuracy</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <School className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Ocean Physics</h3>
              <p className="text-gray-600">Studying ocean dynamics and climate through data science</p>
            </div>
          </div>
        </section>

        {/* Latest Research */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Research</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Paper Reviews</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <BookOpen className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <p className="font-medium">Add your latest paper review here</p>
                  <p className="text-gray-600 mt-1">Your insights and analysis about the paper...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Gwendal Saliou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;
