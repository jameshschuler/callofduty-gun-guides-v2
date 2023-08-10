import { Flex, Heading } from '@chakra-ui/react';

interface GuideBoxProps {
  textSize?: string;
  width?: string;
  text?: string;
}

export function GuideBox({ width, text, textSize }: GuideBoxProps) {
  return (
    <Flex
      h="100px"
      py="6"
      px="4"
      m="4"
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
