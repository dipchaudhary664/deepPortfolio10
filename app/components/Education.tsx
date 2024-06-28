"use client";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

interface TimelineItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  subtitle001: string;
  date: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  subtitle,
  subtitle001,
  date,
}) => {
  return (
    <Flex direction="column" alignItems="flex-start" position="relative" pl={8}>
      <Box
        as={icon}
        position="absolute"
        left={0}
        top={0}
        fontSize="xl"
        color="teal.500"
      />
      <Box>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm" color="gray.600">
          {subtitle}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {subtitle001}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {date}
        </Text>
      </Box>
    </Flex>
  );
};

export default function Portfolio() {
  return (
    <Box p={4} maxW="100%" mx="auto" alignItems="center">
      <Heading as="h1" mb={6} textAlign="center">
        My Portfolio
      </Heading>

      <Flex
        align="start"
        gap={2}
        justify="space-evenly"
        mx={[0, 20]}
        direction={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
        }}
      >
        {/* About Section */}
        <Box>
          <Heading as="h3" size="md" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md">
            Full Name: Dip Narayan Chaudhary <br />
            Nickname: Deep <br />
            From: Nepal <br />
            Current Country: Thailand (Bangkok) <br />
            Address: Fai Kaeo Phu Phiang District, <br />
             Nan 55000
          </Text>
        </Box>
        <Spacer />

        {/* Timeline Section */}
        <Box mt={[5, 0, 0]}>
          <Heading as="h3" size="md" mb={4}>
            Education & Experience
          </Heading>
          <VStack align="start" spacing={4}>
            {/* Education */}
            <TimelineItem
              icon={FaGraduationCap}
              title="Bachelor of Computer Science"
              subtitle="Rajamangala University of Technology Lanna - Nan"
              date="Graduated: March 2024"
              subtitle001={""}
            ></TimelineItem>
            <TimelineItem
              icon={FaGraduationCap}
              title="Final Project"
              subtitle="Nepali Language Learning Application, Using  React-Native,  React Navigation, CSS and Firebase (Database)."
              date={""}
              subtitle001={""}
            ></TimelineItem>

            {/* Experience */}
            <TimelineItem
              icon={FaBriefcase}
              title="Intern - Frontend Developer"
              subtitle="Cloud NC Tech Consulting Agency, Bangkok (Thailand) "
              subtitle001="Work on Ecommerce bookease project (Frontend), Using JavaScript, React JS, Next JS and Tailwind CSS. "
              date="01 March 2023 / 28 February 2024 (4 Months) "
            ></TimelineItem>
            <TimelineItem
              icon={FaBriefcase}
              title="PartTime - Frontend Developer"
              subtitle="Cloud NC Tech Consulting Agency, Bangkok (Thailand)"
              subtitle001="Work on Ecommerce Southeast-Pharmacy project (Frontend), Using TypeScript, Next JS and Tailwind CSS. "
              date="March 2024 - Present"
            ></TimelineItem>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
