import { breadcrumbsAtom } from '@/atoms';
import { Box, Flex, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGuideDetails } from '../api/getGuideDetails';
import { GuideBox } from '../components/GuideBox';
import { Attachments } from './Attachments';

export function GuideDetails() {
  const { gameName, categoryName, guideName } = useParams();
  const { data } = useGuideDetails({ categoryName, gameName, guideName });
  const guide = data?.data?.guide;

  const setBreadcrumbs = useSetAtom(breadcrumbsAtom);

  useEffect(() => {
    setBreadcrumbs({
      categoryName: data?.data?.categoryName,
      gameName: data?.data?.gameName,
      guideName: guide?.title,
    });
  }, [data?.data, guide?.title, setBreadcrumbs]);

  return (
    <div>
      <Heading size="2xl" mb="12">
        {guide?.title}
      </Heading>

      <Flex flexDirection={{ base: 'column', sm: 'row' }}>
        <Box flexBasis="100%" mx="4">
          <Heading my="8">Primary</Heading>
          <GuideBox width="100%" text={guide?.guideWeaponName ?? 'Primary'} />
          <Attachments attachments={guide?.primary?.attachments} />
        </Box>
        <Box flexBasis="100%" mx="4">
          <Heading my="8">Secondary</Heading>
          <GuideBox width="100%" text={guide?.secondary?.name ?? 'Player Choice'} />
          <Attachments attachments={guide?.secondary?.attachments} />
        </Box>
      </Flex>

      <Heading my="8">Equipment</Heading>
      <Stack direction={['column', 'row']} spacing="3" my="4">
        <GuideBox text={guide?.equipment?.lethal ?? 'Lethal'} />
        <GuideBox text={guide?.equipment?.tactical ?? 'Tactical'} />
        <GuideBox text={guide?.equipment?.fieldUpgrade ?? 'Field Upgrade'} />
      </Stack>
      <Heading my="8">Perks</Heading>
      <SimpleGrid spacing={10} minChildWidth={300} columns={{ sm: 1, md: 3 }}>
        {guide?.perks?.map((tier: string[], i: number) => {
          return (
            <Box key={i}>
              <Heading size="lg" ml="6">
                Tier {i + 1}
              </Heading>
              {tier.map((perk: string, j: number) => {
                return <GuideBox width={'100%'} key={j} text={perk}></GuideBox>;
              })}
            </Box>
          );
        })}
      </SimpleGrid>
      <Heading my="8">Wildcard</Heading>
      <Box my="4">
        <GuideBox text={guide?.wildcard ?? 'Wildcard'} />
      </Box>
    </div>
  );
}
