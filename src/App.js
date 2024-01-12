import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import Button from './components/Button';
import Footer from './components/Footer';
import TitleSection from './components/TitleSection';
import ContentBlock from './components/ContentBlock';

function LandingPage() {
  return (
    <div>
      <Header />
      <TitleSection />
      <VideoPlayer />
      <Button />
      <ContentBlock />
      <Footer />
    </div>
  );
}

export default LandingPage;