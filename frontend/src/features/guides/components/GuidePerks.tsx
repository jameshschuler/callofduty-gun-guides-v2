import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { GuideBox } from './GuideBox';

interface GuidePerksProps {
  perks?: string[][];
}

export default function GuidePerks({ perks }: GuidePerksProps) {
  return (
    <>
      <Heading my="8" size="lg">
        Perks
      </Heading>
      <SimpleGrid spacing={10} minChildWidth={300} columns={{ sm: 1, md: 3 }}>
        {perks?.map((tier: string[], i: number) => {
          return (
            <Box key={i}>
              <Heading size="md">Tier {i + 1}</Heading>
              {tier.map((perk: string, j: number) => {
                return <GuideBox width={'100%'} key={j} text={perk}></GuideBox>;
              })}
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}
