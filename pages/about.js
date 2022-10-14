import React from 'react';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Meta } from '../components/layout/Meta';
import siteMetadata from '../utils/siteMetadata';

const About = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title="License" description={siteMetadata.description} />
      <Hero />

      <Footer />
    </div>
  );
};

export default About;
