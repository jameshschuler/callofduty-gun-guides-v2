import { breadcrumbsAtom } from '@/atoms';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';
import { NavLink, useParams } from 'react-router-dom';

export interface BreadcrumbsProps {
  currentRoute: string;
}

export function Breadcrumbs() {
  const { gameName, categoryName, guideName } = useParams();
  const breadcrumbs = useAtomValue(breadcrumbsAtom);

  return (
    <Breadcrumb mx="10" my="8" border="1px solid" p="4" borderRadius={8}>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to={`/`}>
          Games
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to={`/${gameName}`}>
          {breadcrumbs.gameName}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {categoryName && (
        <BreadcrumbItem>
          <BreadcrumbLink
            as={NavLink}
            to={`/${gameName}/${categoryName}`}
            textTransform="capitalize"
          >
            {breadcrumbs.categoryName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
      {guideName && (
        <BreadcrumbItem>
          <BreadcrumbLink as={NavLink} to={`/${gameName}/${categoryName}/${guideName}`}>
            {breadcrumbs.guideName}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}
