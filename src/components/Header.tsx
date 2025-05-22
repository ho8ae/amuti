'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">예</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                예진상사
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                단체복 전문
              </p>
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              홈
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className={`hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              상품
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-blue-600 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              연락처
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 p-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                홈
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                상품
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                연락처
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}