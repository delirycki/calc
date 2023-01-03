import { Children, ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  VStack,
  Spacer
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('white', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav({ children }: { children: ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
    <Center bg={useColorModeValue('white', 'gray.900')}>
      <Box  px={4} maxW='1000px'w="100%">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>
            <Spacer/>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} bg={useColorModeValue('whiteAlpha.100','gray.900')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> 
            </Stack>
          </Flex>
        </Flex>
      </Box>
      </Center>
      {children}
    </>
  );
}
