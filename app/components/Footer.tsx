import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Divider,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py="6">
      <Flex direction="column" align="center">
        <Text mb="4" fontSize="lg">
          Say Hello <span>+66 0988731603 </span>
        </Text>

        <HStack mb={4}>
          <Box px="2">
            <Link href="https://www.facebook.com/deep.xhy/" target="_blank">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={30}
                height={30}
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box px="2">
            <Link href="https://www.instagram.com/cdhryd10/" target="_blank">
              <Image
                src="/instagram.png"
                alt="instagram"
                width={30}
                height={30}
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box px="2">
            <Link href="https://github.com/dipchaudhary664" target="_blank">
              <Image
                src="/github.png"
                alt="github"
                width={30}
                height={30}
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box px="2">
            <Link
              href="https://www.linkedin.com/in/dip-chaudhary/"
              target="_blank"
            >
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
                objectFit="cover"
              />
            </Link>
          </Box>
        </HStack>
        <Divider />
        <Text mt="4">© 2024 Chaudhary Dip</Text>
      </Flex>
    </Box>
  );
}
