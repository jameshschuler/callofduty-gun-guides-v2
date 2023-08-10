import { Flex, Heading, Spinner } from '@chakra-ui/react';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <Flex alignItems="center" justifyContent="center" h="200px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        mr="6"
      />
      <Heading size="md">{message ?? 'Loading'}</Heading>
    </Flex>
  );
}
