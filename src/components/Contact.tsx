'use client';

import { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  // API Gateway 엔드포인트 URL (실제 URL로 교체 필요)
  const API_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_API_URL || 'https://your-api-id.execute-api.ap-northeast-2.amazonaws.com/prod/contact';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // 입력 시 상태 메시지 초기화
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || '문의 전송에 실패했습니다.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "연락처",
      content: "전화번호: 02-2233-8662\n 이메일: yejin1630@hanmail.net",
      action: () => window.location.href = "mailto:yejin1630@hanmail.net"
    },
    {
      icon: "📍",
      title: "사업장 주소",
      content: "서울특별시 중구 다산로36가길 26",
      action: () => window.open("https://map.naver.com/v5/search/서울특별시%20중구%20다산로36가길%2026", "_blank")
    },
    {
      icon: "🏢",
      title: "사업자 정보",
      content: "예진상사 | 대표: 김주상",
      action: null
    },
    {
      icon: "🛒",
      title: "온라인 스토어",
      content: "네이버 스마트스토어",
      action: () => window.open("https://smartstore.naver.com/yejinsports", "_blank")
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            연락처 및 문의
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            궁금한 점이나 주문 문의가 있으시면 언제든지 연락해주세요.
            빠르고 정확한 답변을 드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              연락처 정보
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    info.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                      {info.action && (
                        <div className="mt-3 text-blue-600 hover:text-blue-800 font-medium">
                          자세히 보기 →
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">💡 빠른 문의 팁</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• 단체복 주문 시 수량과 원하는 디자인을 알려주세요</li>
                <li>• 급한 주문은 전화 또는 연락처로 먼저 문자해주세요</li>
                <li>• 맞춤 제작 문의 시 로고나 디자인 파일을 첨부해주세요</li>
              </ul>
            </div>
          </div>

          {/* 문의 폼 */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                문의하기
              </h3>
              
              {/* 상태 메시지 */}
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center space-x-2">
                    <div className="text-lg">
                      {submitStatus.type === 'success' ? '✅' : '❌'}
                    </div>
                    <p>{submitStatus.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100 text-black"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100"
                      placeholder="이메일 주소를 입력해주세요"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    회사/단체명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100"
                    placeholder="회사나 단체명을 입력해주세요 (선택사항)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    문의내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none disabled:bg-gray-100 text-black"
                    placeholder="문의하실 내용을 자세히 적어주세요"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>전송 중...</span>
                    </div>
                  ) : (
                    '문의 보내기'
                  )}
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                문의 내용은 이메일로 전송됩니다. 빠른 시일 내에 답변드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}