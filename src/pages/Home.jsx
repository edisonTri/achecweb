import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import ScrollProgress from '@/components/achec/ScrollProgress';
import Header from '@/components/achec/Header';
import Hero from '@/components/achec/Hero';
import WhatLookingFor from '@/components/achec/WhatLookingFor';
import RoadSafety from '@/components/achec/RoadSafety';
import NewsSection from '@/components/achec/NewsSection';
import SixtySeconds from '@/components/achec/SixtySeconds';
import ResourceCenter from '@/components/achec/ResourceCenter';

import FutureChallenges from '@/components/achec/FutureChallenges';
import NationalMap from '@/components/achec/NationalMap';
import International from '@/components/achec/International';
import FeaturedContent from '@/components/achec/FeaturedContent';
import AboutAchec from '@/components/achec/AboutAchec';
import Directive from '@/components/achec/Directive';
import FinalCTA from '@/components/achec/FinalCTA';
import Footer from '@/components/achec/Footer';
import SearchModal from '@/components/achec/SearchModal';
import CustomCursor from '@/components/achec/CustomCursor';

export default function Home() {
  useReveal();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      <Header onSearchClick={() => setSearchOpen(true)} />
      <main>
        <Hero />
        <WhatLookingFor />
        <RoadSafety />
        <NewsSection />
        <SixtySeconds />
        <ResourceCenter />

        <FutureChallenges />
        <NationalMap />
        <International />
        <FeaturedContent />
        <AboutAchec />
        <Directive />
        <FinalCTA />
      </main>
      <Footer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
