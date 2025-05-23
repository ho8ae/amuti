'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 푸터 콘텐츠 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">예</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">예진상사</h3>
                <p className="text-gray-400">단체복 전문 도소매업체</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              고품질 단체복과 스포츠웨어를 합리적인 가격에 제공하는 
              신뢰할 수 있는 파트너입니다. 고객 만족을 최우선으로 하며, 
              다양한 요구사항에 맞는 맞춤형 서비스를 제공합니다.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="mailto:yejin1630@hanmail.net"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
                title="이메일"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              
              <button
                onClick={() => window.open('https://smartstore.naver.com/yejinsports', '_blank')}
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-lg transition-colors duration-300"
                title="네이버 스토어"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* 주요 메뉴 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">주요 메뉴</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  회사소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  상품
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  연락처
                </button>
              </li>
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h4 className="text-lg font-semibold mb-6">연락처 정보</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">상호명</p>
                <p className="text-gray-300">예진상사</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-1">대표자</p>
                <p className="text-gray-300">김주상</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-1">이메일</p>
                <a 
                  href="mailto:yejin1630@hanmail.net"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  yejin1630@hanmail.net
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">전화번호</p>
                <a 
                  href="tel:01037107457"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  010-3710-7457
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-1">사업장 소재지</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  서울특별시 중구 다산로36가길 26, 106호<br />
                  (신당동, 그린하우스)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 카피라이트 */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} 예진상사. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-sm">맨 위로</span>
              </button>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>단체복 전문</span>
                <span>•</span>
                <span>도소매업</span>
                <span>•</span>
                <span>맞춤 제작</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}