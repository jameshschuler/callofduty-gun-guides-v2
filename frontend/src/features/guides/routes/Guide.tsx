import { ResetError } from '@/shared';
import Loading from '@/shared/components/Loading';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GuideDetails } from '../components/GuideDetails';

export function Guide() {
  return (
    <div>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ResetError resetErrorBoundaryFn={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<Loading message="Loading guide ..." />}>
          <GuideDetails />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
