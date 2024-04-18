import { Image, Heading, VStack, Text, Flex } from "@chakra-ui/react";

export default function Profile() {
  return (
    <VStack
      direction="row"
      my={[5, 10, 20]}
      spacing={4}
      align="center"
      justify="center"
      color="#17202A"
    >
      <Flex direction={["column", "row"]}>
        <Heading
          fontSize={["3xl", "5xl"]}
          textAlign="center"
          justifyItems="flex-start"
        >
          Frontend Developer
        </Heading>
        <Heading
          fontSize={["3xl", "5xl"]}
          pl={[0, 5]}
          textAlign="center"
          color="#EDD633"
        >
          & Mobile
        </Heading>
      </Flex>
      <Text fontSize={["sm", "lg"]}>
        Upgrade your life in silence, and I love what I do.
      </Text>
      <Image
        mt={10}
        src="/dip.jpg"
        alt="Profile Image"
        borderRadius="full"
        width="250px"
        height="250px"
        objectFit="cover"
        boxShadow="2xl"
      />
    </VStack>
  );
}
