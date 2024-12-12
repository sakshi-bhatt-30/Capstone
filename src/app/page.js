// src/app/page.js
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Analytics from '@/components/analytics';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import UserFeedback from '@/components/userfeedback';
import Workflow from '@/components/workflow';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">
      
      <Header />
      <Hero />
      <Features />
      <Workflow/>
      <CTA />
      <UserFeedback />
      <Footer />
      
    </div>
  );
}
