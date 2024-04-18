import { Box, Heading, Flex, Image, Grid, Text, Card } from "@chakra-ui/react";

const mySkills = {
  frontend: [
    { name: "JavaScript", image: "/javascript.png" },
    { name: "Next.js", image: "/nextjs.png" },
    { name: "React-Native", image: "/reactnative.png" },
    { name: "Firebase", image: "/Firebase.png" },
    { name: "Tailwind CSS", image: "/tailwindcss.png" },
    { name: "Chakra UI", image: "/chakra_ui.png" },
  ],
};
export default function Skills() {
  return (
    <Box w="90%" my={10} mx="auto" alignItems="center" justifyItems="center">
      <Flex
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        my={5}
      >
        <Heading>Tech Stack</Heading>
        <Image
          mt={2}
          ml={4}
          src="/system-solid-34-code.gif"
          alt="Profile Image"
          borderRadius="full"
          width="50px"
          height="50px"
          objectFit="cover"
          boxShadow="2xl"
        />
      </Flex>
      <Flex mx="auto" justifyContent="center" alignItems="center">
        <Grid
          templateColumns={{
            base: "100%",
            md: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          {mySkills.frontend.map((skill, index) => (
            <Box key={index} textAlign="center" m={4}>
              <Card p={4} boxShadow="md" borderRadius="md">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  h="100px"
                  w="100px"
                  objectFit="cover"
                  mx="auto"
                />
                <Text mt={2}>{skill.name}</Text>
              </Card>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
