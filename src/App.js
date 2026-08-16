import './App.css';
import { useState, useEffect } from 'react';

// Существующие компоненты (остаются как есть)
import Footer from './Footer';
import Call from './Call';
import Services from './Services';
import SubscriptionCard from './SubscriptionCard';
import Preloader from './Preloader';

// Новые компоненты (из папки components)
import Header from './components/Header';
import Hero from './components/Hero';
import StatsPanel from './components/StatsPanel';
import Advantages from './components/Advantages';
import About from './components/About';
import GymGallery from './components/GymGallery';
import Subscriptions from './components/Subscriptions';
import Rules from './components/Rules';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Call />
      <div className="hero-section">
        <Header />
        <Hero />
        <StatsPanel />
      </div>
      <Advantages />
      <About />
      <GymGallery />
      <Subscriptions />
      <Services />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;