import { Flex, Heading } from '@chakra-ui/react';

interface GuideBoxProps {
  textSize?: string;
  width?: string;
  text?: string;
  mx?: string;
}

export function GuideBox({ mx, width, text, textSize }: GuideBoxProps) {
  return (
    <Flex
      h="100px"
      py="6"
      px="4"
      my="4"
      mx={mx}
      border="1px solid"
      borderRadius="8"
      width={{ base: '100%', sm: width ?? '33%' }}
      align="center"
      justify="center"
    >
      <Heading textAlign="center" size={textSize}>
        {text}
      </Heading>
    </Flex>
  );
}
