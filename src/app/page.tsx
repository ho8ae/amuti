'use client';

import ClientLayout from './client-layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ClientLayout>
      <HomePage />
    </ClientLayout>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}