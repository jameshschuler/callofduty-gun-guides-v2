import { breadcrumbsAtom } from '@/atoms';
import { SimpleGrid } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGuides } from '../api/getGuides';
import { Guide } from '../types';
import { GuideCard } from './GuideCard';

export function GuidesList() {
  const { gameName, categoryName } = useParams();
  const { data } = useGuides({ categoryName, gameName });

  const setBreadcrumbs = useSetAtom(breadcrumbsAtom);

  useEffect(() => {
    setBreadcrumbs({
      categoryName: data?.data?.categoryName,
      gameName: data?.data?.gameName,
    });
  }, [data?.data, setBreadcrumbs]);

  return (
    <SimpleGrid mt="10" py="4" spacing={10} minChildWidth={300} templateColumns="repeat(3, 1fr)">
      {data?.data &&
        data.data.guides.map((guide: Guide) => {
          return (
            <GuideCard
              key={guide.guideId}
              guideWeaponName={guide.guideWeaponName}
              slug={guide.slug}
              title={guide.title}
            />
          );
        })}
    </SimpleGrid>
  );
}
