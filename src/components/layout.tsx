import React from 'react';
import { cls } from '@/libs/client/utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface LayoutProps {
  // typescript 를 사용하고 있을 때만 가능한 코드
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

const Layout = ({ title, canGoBack, hasTabBar, children }: LayoutProps) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? 'justify-center' : '',
          'bg-white w-full max-w-lg text-lg font-medium px-10 py-3 pt- fixed text-gray-800 border-b top-0 flex items-center',
        )}
      >
        {/* 돌아가기 버튼이 있을 땐 왼쪽, 그렇지 않을 땐 다시 가운데에 위치하도록 조건부로 css 적용 */}
        {canGoBack ? (
          <button onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls('pt-[70px]', hasTabBar ? 'pb-[88px]' : '')}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white max-w-lg text-gray-800 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between items-center">
          <Link
            href="/"
            className={cls(
              'flex flex-col items-center space-y-2 ',
              router.pathname === '/' ? 'text-orange-500' : 'hover:text-gray-500 transition-colors',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>홈</span>
          </Link>
          <Link
            href="/community"
            className={cls(
              'flex flex-col items-center space-y-2 ',
              router.pathname === '/community'
                ? 'text-orange-500'
                : 'hover:text-gray-500 transition-colors',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            <span>동네생활</span>
          </Link>
          <Link
            href="/chats"
            className={cls(
              'flex flex-col items-center space-y-2 ',
              router.pathname === '/chats'
                ? 'text-orange-500'
                : 'hover:text-gray-500 transition-colors',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
            <span>채팅</span>
          </Link>
          <Link
            href="/streams"
            className={cls(
              'flex flex-col items-center space-y-2 ',
              router.pathname === '/streams'
                ? 'text-orange-500'
                : 'hover:text-gray-500 transition-colors',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span>Live</span>
          </Link>
          <Link
            href="/profile"
            className={cls(
              'flex flex-col items-center space-y-2 ',
              router.pathname === '/profile'
                ? 'text-orange-500'
                : 'hover:text-gray-500 transition-colors',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>나의 캐럿</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
