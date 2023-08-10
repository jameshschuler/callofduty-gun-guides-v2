import { ResetError } from '@/shared';
import Loading from '@/shared/components/Loading';
import { Heading } from '@chakra-ui/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CategoryList } from '../components/CategoryList';

export function Categories() {
  return (
    <>
      <Heading>Weapon Categories</Heading>

      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ResetError resetErrorBoundaryFn={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<Loading message="Loading Categories..." />}>
          <CategoryList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
