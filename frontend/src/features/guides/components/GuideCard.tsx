import { Button, Card, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import { Link as NavLink, useParams } from 'react-router-dom';

interface GuideCardProps {
  guideWeaponName?: string;
  title: string;
  slug: string;
}

export function GuideCard({ guideWeaponName, title, slug }: GuideCardProps) {
  const { gameName, categoryName } = useParams();
  return (
    <Card maxW="350" borderRadius="8" px="4">
      <CardHeader h="100px">
        <Heading as="h3" size="lg">
          {guideWeaponName}
        </Heading>
        <Heading as="h5" size="md" mt="4">
          {title}
        </Heading>
      </CardHeader>
      <CardFooter justify="end" my="4">
        <Button as={NavLink} to={`/${gameName}/${categoryName}/${slug}`}>
          View Guide
        </Button>
      </CardFooter>
    </Card>
  );
}
