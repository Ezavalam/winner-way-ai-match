
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UploadSection from '../components/UploadSection';
import DemoSection from '../components/DemoSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-winner-beige">
      <Header />
      <main>
        <Hero />
        <UploadSection />
        <DemoSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
