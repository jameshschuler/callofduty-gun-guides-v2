import Loading from '@/shared/components/Loading';
import { ResetError } from '@/shared/components/ResetError';
import { Box, Heading, Input } from '@chakra-ui/react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GuidesList } from '../components/GuidesList';

export function Guides() {
  return (
    <>
      <Box
        width={{
          sm: '100%',
          md: '50%',
        }}
      >
        <Heading>Search Gun Guides</Heading>
        <Input placeholder="Search by creator or weapon name" mt="4" size="lg"></Input>
      </Box>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <ResetError resetErrorBoundaryFn={resetErrorBoundary} />
        )}
      >
        <Suspense fallback={<Loading message="Loading guides ..." />}>
          <GuidesList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
