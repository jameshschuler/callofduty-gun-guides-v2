import { Flex } from '@chakra-ui/react';
import { GuideBox } from './GuideBox';

interface AttachmentsProps {
  attachments?: string[];
}

export function Attachments({ attachments }: AttachmentsProps) {
  return (
    <Flex flexWrap="wrap">
      {attachments &&
        attachments.map((attachment: string, index: number) => {
          return <GuideBox key={index} text={attachment} textSize="md"></GuideBox>;
        })}
    </Flex>
  );
}
