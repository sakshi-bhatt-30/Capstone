import React from 'react';
import ComparisonCards from '@/components/comparisonCards';
import '/src/app/globals.css';

const ComparisonPage = () => {
  return (
    <main className="comparison-page">
      <h1 className="comparison-heading">Compare FlockIQ and Google Forms</h1>
      <ComparisonCards />
    </main>
  );
};

export default ComparisonPage;
