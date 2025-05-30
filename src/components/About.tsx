'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "👔",
      title: "도소매 전문",
      description: "단체복 도매와 소매를 모두 취급하여 다양한 요구사항에 맞춘 서비스를 제공합니다."
    },
    {
      icon: "🏆",
      title: "품질 보증",
      description: "엄선된 제품만을 취급하여 고품질의 단체복을 합리적인 가격에 제공합니다."
    },
    {
      icon: "🚚",
      title: "빠른 배송",
      description: "신속한 주문 처리와 배송으로 고객님의 일정에 맞춰 제품을 제공합니다."
    },
    {
      icon: "💬",
      title: "맞춤 상담",
      description: "고객의 요구사항에 맞는 맞춤형 상담과 솔루션을 제공합니다."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            예진상사 소개
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            단체복 전문 도소매업체로서 다양한 고품질 제품을 합리적인 가격에 제공하며, 
            고객 만족을 최우선으로 하는 신뢰할 수 있는 파트너입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                회사 정보
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">회</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">상호명</p>
                    <p className="text-gray-600">예진상사</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">대</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">대표자</p>
                    <p className="text-gray-600">김주상</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">주</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">사업장 소재지</p>
                    <p className="text-gray-600">
                      서울특별시 중구 다산로36가길 26 106호
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">연</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">연락처</p>
                    <a 
                      href="mailto:yejin1630@hanmail.net" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                    전화번호: 02-2233-8662
                    <br/>
                     이메일: yejin1630@hanmail.net
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                우리의 약속
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>고품질 제품만을 엄선하여 제공</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>합리적이고 투명한 가격 정책</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>신속하고 정확한 주문 처리</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>고객 중심의 맞춤형 서비스</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}