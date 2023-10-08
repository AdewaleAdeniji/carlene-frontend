import {
  Box,
  Button,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Box
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "25px",
              }}
            >
              AppName
            </Box>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
            <Button
                bg={"white.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => (window.location.href = "/auth/signup")}
              >
              Dodo
              </Button>
          
              <Button
                colorScheme={"blue"}
                bg={"blue.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => (window.location.href = "/auth/signup")}
              >
                Plantain
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
