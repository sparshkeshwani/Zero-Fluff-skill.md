import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LivePlayground from '@/components/LivePlayground';
import ProtocolViewer from '@/components/ProtocolViewer';
import BacktestScorecard from '@/components/BacktestScorecard';
import PlatformSetupGuide from '@/components/PlatformSetupGuide';
import RepositoryBrowser from '@/components/RepositoryBrowser';
import AuthorShowcase from '@/components/AuthorShowcase';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <Hero />
      <LivePlayground />
      <ProtocolViewer />
      <BacktestScorecard />
      <PlatformSetupGuide />
      <RepositoryBrowser />
      <AuthorShowcase />
      <Footer />
    </main>
  );
}
