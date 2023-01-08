import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Center bg={useColorModeValue("white", "gray.900")}>
        <Box px={4} maxW="1000px" w="100%">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box mr={3}>Logo</Box>
            <Button ml={1} variant="ghost">
              <Link to="/"> Results</Link>{" "}
            </Button>
            <Button ml={1} variant="ghost">
              <Link to="/calculator">Calculator </Link>
            </Button>
            <Spacer />
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button
                  onClick={toggleColorMode}
                  bg={useColorModeValue("whiteAlpha.100", "gray.900")}
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
