import { GamesList } from '@/features/games';
import { ResetError } from '@/shared';
import Loading from '@/shared/components/Loading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Hero from '../components/Hero';

export function Home() {
  return (
    <>
      <Hero />
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ResetError resetErrorBoundaryFn={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<Loading message="Loading Games..." />}>
          <GamesList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
