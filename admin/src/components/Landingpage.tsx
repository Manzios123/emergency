import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from './PropelProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AnimatedCounter } from './AnimatedCounter';
import { QuoteRotator } from './QuoteRotator';

// Header Component
const Header: React.FC = () => {
  const t = useT();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">ER</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}>
              Evergreen Rwanda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 hover:text-green-600 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 hover:text-green-600 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/donate" 
              className={`font-medium transition-colors duration-200 hover:text-green-600 ${
                isScrolled ? 'text-green-900' : 'text-white'
              }`}
            >
              {t('nav.donate')}
            </Link>
            <LanguageSwitcher />
            <Link 
              to="/login" 
              className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t('nav.login')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button className={`p-2 rounded-lg ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  const t = useT();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="mb-12">
            <p className="text-lg italic text-green-200 opacity-90">
              {t('hero.quote')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/donate" 
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              {t('hero.donate')}
            </Link>
            <Link 
              to="/login" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-900 transform hover:scale-105 transition-all duration-300"
            >
              {t('hero.login')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// Mission Section
const MissionSection: React.FC = () => {
  const t = useT();

  const values = [
    {
      icon: '🎓',
      title: t('mission.values.education.title'),
      description: t('mission.values.education.description')
    },
    {
      icon: '🌱',
      title: t('mission.values.sustainability.title'),
      description: t('mission.values.sustainability.description')
    },
    {
      icon: '👥',
      title: t('mission.values.community.title'),
      description: t('mission.values.community.description')
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-white to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-xl text-green-700 leading-relaxed">
            {t('mission.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {value.title}
              </h3>
              <p className="text-green-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection: React.FC = () => {
  const t = useT();

  const stats = [
    { number: 12, label: t('stats.schools') },
    { number: 5000, label: t('stats.students'), suffix: '+' },
    { number: 20, label: t('stats.clubs') },
    { number: 15, label: t('stats.coordinators') }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('stats.title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 text-green-100">
                <AnimatedCounter 
                  end={stat.number} 
                  duration={2500}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className="text-lg md:text-xl text-green-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Section
const ImpactSection: React.FC = () => {
  const t = useT();
  const sectionRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              {t('impact.title')}
            </h2>
            <p className="text-xl text-green-700 mb-8 leading-relaxed">
              {t('impact.description')}
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('impact.learnMore')}
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <img
                  src={src}
                  alt={`Impact ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Quote Section
const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <QuoteRotator />
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection: React.FC = () => {
  const t = useT();

  return (
    <section className="py-20 bg-linear-to-br from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-green-100 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/donate" 
              className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[200px]"
            >
              {t('cta.donate')}
            </Link>
            <Link 
              to="/volunteer" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-700 transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              {t('cta.volunteer')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer: React.FC = () => {
  const t = useT();

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ER</span>
              </div>
              <span className="text-xl font-bold">Evergreen Rwanda</span>
            </div>
            <p className="text-green-200 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <button
                  key={platform}
                  className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                >
                  <span className="text-sm font-semibold">{platform[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.social')}</h3>
            <ul className="space-y-2">
              {Object.entries(t('footer.links') as Record<string, string>).map(([key, label]) => (
                <li key={key}>
                  <Link to={`/${key}`} className="text-green-200 hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-green-200 not-italic">
              <p>Kigali, Rwanda</p>
              <p className="mt-2">info@evergreenrwanda.org</p>
              <p className="mt-2">+250 788 123 456</p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-green-300">
            © {new Date().getFullYear()} Evergreen Rwanda. {t('footer.copyright')}
          </p>
          <p className="text-green-400 text-sm mt-2">
            {t('footer.powered')}
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Landing Page Component
const LandingPage: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <StatsSection />
        <ImpactSection />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;