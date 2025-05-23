'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      
      {/* 애니메이션 요소들 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-white/20 rounded-full animate-spin"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2">예진상사</span>
            <span className="text-3xl md:text-4xl font-normal text-blue-200">
              단체복 전문 도소매업체
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            다양한 단체복과 스포츠웨어를 합리적인 가격에 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProducts}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              상품 둘러보기
            </button>
            
            <a
              href="mailto:yejin1630@hanmail.net"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}