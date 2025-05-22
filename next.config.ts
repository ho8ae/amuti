/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 내보내기를 위한 설정
  images: {
    unoptimized: true, // 정적 내보내기 시 이미지 최적화 비활성화
  },
  // 정적 내보내기는 i18n과 함께 사용할 수 없음
  // 대신 우리는 커스텀 언어 컨텍스트를 만들어 사용함
};

module.exports = nextConfig;