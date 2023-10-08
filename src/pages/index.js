import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  createIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import PageContainer from "../layouts/PageContainer";
import ImageP from "../helpers/app-1.png";

const LandingPage = () => {
  return (
    <PageContainer>
      <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              App tagine
            </Text>
            <br />
            <Text as={'span'} color={'blue.400'}>
            for what
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            what it does
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'blue.400'}
              _hover={{ bg: 'red.500' }}
              onClick={() => (window.location.href = "/auth/signup")}
              >
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={() => window.open("https://aoadeniji81.gitbook.io/sitlist/")}
              >
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'contain'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                ImageP
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
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
            Unleash the &nbsp;
            <Text as={"span"} color={"blue.400"}>
              Power, <br />
            </Text>{" "}
            of Product{" "}
            <Text as={"span"} color={"blue.400"}>
              Waitlists .
            </Text>
          </Heading>
          <Text color={"gray.500"} mt={10}>
            
            <br /> Say goodbye to backend complexities and focus on what you do
            best – building exceptional products.Engage your audience and gather valuable
            insights with ease.
          </Text>
          cbndm
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
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-100px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                Free - $0/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Join the Waitlist Revolution</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Be a part of the waitlist revolution and streamline your product
            launches like never before. Our SAAS solution empowers you to focus
            on innovation while we handle the waitlist management.
          </Text>
        </Stack>

        <Container maxW={"6xl"} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>"Secure Data Handling</Text>
                <Text color={"gray.600"}>
                  Rest easy knowing that your user data is handled with the
                  utmost security. Our advanced encryption ensures that
                  sensitive information is protected at all times
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Real-time Analytics</Text>
                <Text color={"gray.600"}>
                  Gain valuable insights into user engagement and signup trends.
                  Our platform provides you with real-time analytics to help you
                  make informed decisions.
                </Text>
              </VStack>
            </HStack>
            <HStack align={"top"}>
              <Box color={"blue.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>Seamless Export</Text>
                <Text color={"gray.600"}>
                Transition seamlessly from waitlist to customer list. Easily export your waitlist data for a smooth onboarding process when your product is ready to launch.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </Container>
      </Box>
    </PageContainer>
  );
};
const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
export default LandingPage;
