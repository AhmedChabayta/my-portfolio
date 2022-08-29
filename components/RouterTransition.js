// components/RouterTransition.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  startNavigationProgress,
  resetNavigationProgress,
  NavigationProgress,
} from '@mantine/nprogress';

export default function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && startNavigationProgress();
    const handleComplete = () => resetNavigationProgress();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath, router.events]);

  return <NavigationProgress color="red" />;
}
