'use client';

import { useEffect, useState } from 'react';

// 디버깅을 위한 래퍼 컴포넌트
function LanguageDebugger({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    console.log('ClientLayout mounted - hydration complete');
  }, []);
  
  if (!mounted) {
    // 서버 사이드 렌더링 또는 hydration 중
    return null;
  }
  
  return <>{children}</>;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageDebugger>
      {children}
    </LanguageDebugger>
  );
}