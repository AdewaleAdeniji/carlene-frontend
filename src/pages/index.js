import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import PageContainer from "../layouts/PageContainer";

const LandingPage = () => {
  return (
    <PageContainer>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            mt={20}
          >
            Revolutionize Your Car Ownership Experience with
            <Text as={"span"} color={"blue.400"}>
              {" "}
              Carlene.
            </Text>
          </Heading>
          <Text color={"gray.500"} mt={10}>
            <br /> "Effortlessly Manage Maintenance, Expenses, and Performance
            for a Smoother Ride"
          </Text>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
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
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Box p={4}>
        <Container maxW={"8xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}> Maintenance Tracker</Text>
                <Text color={"gray.600"}>
                  Easily keep track of your car's maintenance schedule with
                  Carlene. Receive timely reminders for oil changes, tire
                  rotations, brake inspections, and more. Stay on top of crucial
                  upkeep to ensure your car runs smoothly and stays in top
                  condition.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Expense Management</Text>
                <Text color={"gray.600"}>
                  Take control of your car-related expenses like never before.
                  Carlene allows you to log and categorize expenses for fuel,
                  repairs, parts, and services. Gain insights into your spending
                  habits and make informed decisions to optimize your budget for
                  your vehicle.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Detailed Reports</Text>
                <Text color={"gray.600"}>
                  Get comprehensive reports on your car's performance and
                  maintenance history. Analyze trends, identify areas for
                  improvement, and access valuable insights to make informed
                  decisions. Whether you're planning for the long term or
                  troubleshooting an issue, our detailed reports have you
                  covered.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </PageContainer>
  );
};
export default LandingPage;
