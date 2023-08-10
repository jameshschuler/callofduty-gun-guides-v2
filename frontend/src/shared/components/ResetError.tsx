import { Button } from '@chakra-ui/react';

interface ResetErrorProps {
  resetErrorBoundaryFn: () => void;
}

export function ResetError({ resetErrorBoundaryFn }: ResetErrorProps) {
  return (
    <div>
      There was an error!
      <Button onClick={() => resetErrorBoundaryFn()}>Try again</Button>
    </div>
  );
}
