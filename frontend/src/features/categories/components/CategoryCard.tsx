import { Button, Card, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import { Link as NavLink, useParams } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category: { categoryName, guideCount, slug } }: CategoryCardProps) {
  const { gameName } = useParams();

  return (
    <Card maxW="350" h="200px" borderRadius="8">
      <CardHeader>
        <Heading as="h3" size="lg">
          {categoryName}
        </Heading>
        <Heading as="h5" size="md" mt="4">
          {guideCount} Guides
        </Heading>
      </CardHeader>
      <CardFooter justify="end">
        <Button as={NavLink} to={`/${gameName}/${slug}`} isDisabled={guideCount === 0}>
          View Guides
        </Button>
      </CardFooter>
    </Card>
  );
}
