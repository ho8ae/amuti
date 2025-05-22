import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhoisWhat - 창의적 혁신을 추구하는 기업',
  description: '복잡함을 단순하게, 단순함을 강력하게. WhoisWhat은 창의적 혁신을 통해 가치를 창출합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}