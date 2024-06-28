"use client";
import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Heading,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

const projects = [
  {
    title: "ToDo App.",
    url: "https://todos-aaz94plwg-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/todos.png",
  },
  {
    title: "Netflix 2.0.",
    url: "https://netflix-fronted-view.vercel.app/",
    coverImg: "/netflix.png",
  },
  {
    title: "Covid 19",
    url: "https://todos-aaz94plwg-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/covid.png",
  },
  {
    title: "Spotify 2.0",
    url: "https://spotifydeep-9dvzoa8ri-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/spotify.png",
  },
];

const ProjectShowcase = () => {
  const openLinkInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };

  const paddingX = useBreakpointValue({ base: 5, md: 5, lg: 100 });

  return (
    <Box p={5}>
      <Heading mb={2} textAlign="center">
        My Recent Work
      </Heading>
      <Text fontSize="md" mb={2} textAlign="center">
        Here are a few past design projects I've worked on.
      </Text>
      <Text fontSize="md" mb={5} textAlign="center">
        Websites and WebApps
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        paddingX={paddingX}
        pb="50"
        pt="6"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            bgImage={project.coverImg}
            bgSize="cover"
            bgPos="center"
            h="200px"
            shadow="md"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p={5}
            color="white"
            fontWeight="bold"
            position="relative"
            transition="all 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "md",
            }}
          >
            <HStack position="absolute" gap={5} bottom={4} zIndex={1}>
              <Box background="#667BC6" p={2} rounded={5}>
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  letterSpacing="wide"
                  color="purple"
                  textAlign="center"
                  textDecoration="none"
                >
                  {project.title}
                </Text>
              </Box>
              <Button
                variant="outline"
                colorScheme="blue"
                size="md"
                onClick={() => openLinkInNewTab(project.url)}
              >
                View Project
              </Button>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectShowcase;
