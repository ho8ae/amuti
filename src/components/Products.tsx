'use client';

import { useEffect, useState, useRef } from 'react';

export default function Products() {
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

  // 실제 네이버 스마트스토어 링크로 교체해주세요
  const products = [
    {
      id: 1,
      name: "단체복 티셔츠",
      description: "고품질 면소재의 단체복 티셔츠, 다양한 색상과 사이즈 제공",
      price: "7,000원~",
      image: "https://shop-phinf.pstatic.net/20250426_245/1745629116977NJjhB_PNG/43196368608211985_1664753144.png?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/11570696163" // 실제 링크로 교체
    },
    {
      id: 2,
      name: "운동복 세트",
      description: "스포츠 활동에 최적화된 운동복 세트, 통기성과 내구성이 뛰어남",
      price: "31,500원~",
      image: "https://shop-phinf.pstatic.net/20250323_111/1742693511101SDK08_JPEG/77047923913393903_1667810996.jpeg?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/11626269512" // 실제 링크로 교체
    },
    {
      id: 3,
      name: "작업복",
      description: "안전하고 편안한 작업환경을 위한 전문 작업복",
      price: "53,400원~",
      image: "https://shop-phinf.pstatic.net/20241210_235/1733821423794lqWqk_PNG/67954236847198656_1657347757.png?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/11232645611" // 실제 링크로 교체
    },
    {
      id: 4,
      name: "유니폼",
      description: "깔끔하고 세련된 디자인의 직업복 유니폼",
      price: "28,500원~",
      image: "https://shop-phinf.pstatic.net/20241203_248/1733207864658LGcEU_PNG/9695240864465064_567964432.png?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/11206389085" // 실제 링크로 교체
    },
    {
      id: 5,
      name: "스포츠 자켓",
      description: "보온성과 활동성을 모두 갖춘 스포츠 자켓",
      price: "22,000원~",
      image: "https://shop-phinf.pstatic.net/20250410_126/1744281925656foxOq_PNG/265610785723091_1616888940.png?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/11702608648" // 실제 링크로 교체
    },
    {
      id: 6,
      name: "체육 대회 반티",
      description: "체육 대회용 반팔티 다양한 축구 팀의 티셔츠!",
      price: "18,500원~",
      image: "https://shop-phinf.pstatic.net/20240423_54/1713879438382KI5Fv_PNG/115015337060449663_465253971.png?type=f296_296",
      naverLink: "https://smartstore.naver.com/yejinsports/products/10246357854" // 실제 링크로 교체
    }
  ];

  const categories = [
    { name: "전체 (99+)", count: '99+' },
    { name: "반팔티", count: '99+' },
    { name: "긴티", count: '99+' },
    { name: "작업복", count: '99+' },
    { name: "유니폼", count: '99+' },
    { name: "조끼", count: '99+' },
    { name: "스포츠 자켓", count: '99+' },
    { name: "기타", count: '99+' },
    
    
  ];

  const [selectedCategory, setSelectedCategory] = useState("전체");

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            주요 상품
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 종류의 단체복과 스포츠웨어를 네이버 스마트스토어에서 만나보세요.
            각 상품을 클릭하면 상세 정보와 주문이 가능합니다.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} 
            </button>
          ))}
        </div>

        {/* 상품 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => window.open(product.naverLink, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>네이버 스토어</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              더 많은 상품이 궁금하신가요?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              네이버 스마트스토어에서 전체 상품 라인업을 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://smartstore.naver.com/yejinsports', '_blank')}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                네이버 스토어 방문하기
              </button>
              <a
                href="mailto:yejin1630@hanmail.net"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                맞춤 상담 요청
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}