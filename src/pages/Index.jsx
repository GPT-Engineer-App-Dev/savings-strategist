import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Opinion</Link>
          <Link href="#">Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Latest News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="md" mt={2}>Headline 1</Heading>
              <Text mt={2}>Brief description of the news article goes here.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="md" mt={2}>Headline 2</Heading>
              <Text mt={2}>Brief description of the news article goes here.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="md" mt={2}>Headline 3</Heading>
              <Text mt={2}>Brief description of the news article goes here.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/300" alt="News Image" />
              <Heading size="md" mt={2}>Headline 4</Heading>
              <Text mt={2}>Brief description of the news article goes here.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading size="lg" mb={4}>Trending</Heading>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading size="sm">Editor's Pick 1</Heading>
              <Text>Brief description of the editor's pick.</Text>
            </Box>
            <Box>
              <Heading size="sm">Editor's Pick 2</Heading>
              <Text>Brief description of the editor's pick.</Text>
            </Box>
            <Box>
              <Heading size="sm">Editor's Pick 3</Heading>
              <Text>Brief description of the editor's pick.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;