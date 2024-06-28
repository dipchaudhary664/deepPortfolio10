"use client";
import {
  Box,
  SimpleGrid,
  Button,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";

const projects = [
  {
    title:
      "High-end, custom residential renovators serving Fraser Valley homeowners.",
    url: "https://todos-aaz94plwg-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/todos.png",
  },
  {
    title:
      "High-end, custom residential renovators serving Fraser Valley homeowners.",
    url: "https://todos-aaz94plwg-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/todos.png",
  },
  {
    title:
      "High-end, custom residential renovators serving Fraser Valley homeowners.",
    url: "https://todos-aaz94plwg-dipchaudhary664s-projects.vercel.app/",
    coverImg: "/todos.png",
  },
  // Add more projects as needed
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
            <Text
              fontSize="sm"
              fontWeight="normal"
              letterSpacing="wide"
              color="gray.100"
              textAlign="center"
              textDecoration="none"
              pt="20px"
              zIndex={1}
            >
              {project.title}
            </Text>
            <Button
              variant="outline"
              colorScheme="blue"
              size="md"
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
              onClick={() => openLinkInNewTab(project.url)}
            >
              View Project
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectShowcase;
