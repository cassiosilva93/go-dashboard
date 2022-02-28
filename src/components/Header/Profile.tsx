import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

export function Profile({name, email, avatarUrl}: ProfileProps) {
  return (
    <Flex align="center">
      <Box mr="4" ml="4" textAlign="left">
        <Text>{name}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>

      <Avatar size="md" name={name} src={avatarUrl}/>
    </Flex>
  );
}