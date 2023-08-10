import { Flex, HStack, Heading, Icon, Link, Spacer } from '@chakra-ui/react';
import { FaGithubAlt } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex as="nav" p="6" alignItems="center" borderBottom="1px solid">
      <Heading as="h1" fontSize="1.5em">
        <NavLink to={'/'}> CoD Gun Guides</NavLink>
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Link href="https://github.com/jameshschuler" target="_blank">
          <Icon as={FaGithubAlt} boxSize={6} />
        </Link>
      </HStack>
    </Flex>
  );
}
