import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Breadcrumbs } from '..';
import Navbar from './Navbar';

export default function RootLayout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname !== '/' && <Breadcrumbs />}
      <Box as="main" padding={{ base: 5, sm: 10 }} maxW={1500} mx="auto">
        <Outlet />
      </Box>
    </>
  );
}
