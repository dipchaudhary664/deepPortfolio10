import { Heading, Stack, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Stack
      w="80%"
      mx="auto"
      mb={10}
      p={4}
      spacing={4}
      align="center"
      color="#17202A"
    >
      <Heading fontSize={{ base: "sm", md: "md", lg: "lg" }} textAlign="center">
        🖐🏽 I’m Dip. Nice to meet you.
      </Heading>

      <Text fontSize={["sm", "lg"]} w={["", "75%"]} align="justify">
        During my internship, I had the valuable experience of working closely
        with a team, where I actively contributed to frontend development in a
        project. I collaborated with colleagues to implement frontend features
        using technologies like Next.js and React Native. This hands-on
        experience not only enhanced my technical skills but also taught me the
        importance of teamwork and effective communication in delivering
        successful projects!
      </Text>
    </Stack>
  );
}
