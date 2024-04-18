import { Stack, HStack, Box, Heading, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <Stack w="90%" mx="auto" p={4}>
      <HStack spacing="24px">
        <Heading color="#800080">Chaudhary</Heading>
        <Spacer />
        <HStack display={{ base: "none", md: "flex" }}>
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
      </HStack>
    </Stack>
  );
}
