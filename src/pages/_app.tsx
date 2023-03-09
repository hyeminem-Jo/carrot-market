import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // mx-auto: 중앙 배치
    // max-w-lg: 512px(max-width)
    <div className="w-full max-w-lg mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
