import { Button, Flex, Heading } from '@chakra-ui/react';

interface ResetErrorProps {
  resetErrorBoundaryFn: () => void;
}

export function ResetError({ resetErrorBoundaryFn }: ResetErrorProps) {
  return (
    <Flex
      my="8"
      align="center"
      justify="center"
      direction="column"
      border="1px solid"
      borderRadius="8"
      padding="10"
    >
      <Heading as="h2" size="md" mb="10">
        There was an error!
      </Heading>
      <Button onClick={() => resetErrorBoundaryFn()}>Try again</Button>
    </Flex>
  );
}
