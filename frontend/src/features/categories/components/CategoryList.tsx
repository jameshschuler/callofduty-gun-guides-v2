import { breadcrumbsAtom } from '@/atoms';
import { SimpleGrid } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from '../api/getCategories';
import { Category } from '../types';
import { CategoryCard } from './CategoryCard';

export function CategoryList() {
  const { gameName } = useParams();
  const { data } = useCategories({ gameName });
  const setBreadcrumbs = useSetAtom(breadcrumbsAtom);

  useEffect(() => {
    setBreadcrumbs({
      gameName: data?.data?.gameName,
    });
  }, [data?.data?.gameName, setBreadcrumbs]);

  return (
    <SimpleGrid mt="10" py="4" columns={4} spacing={10} minChildWidth={300}>
      {data?.data &&
        data.data?.categories.map((category: Category) => {
          return <CategoryCard key={category.categoryId} category={category} />;
        })}
    </SimpleGrid>
  );
}
