import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
  name: string;
  email: string;
  avatarUrl?: string;
}

export function Profile({showProfileData = true, name, email, avatarUrl}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" ml="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}
      
      <Avatar size="md" name={name} src={avatarUrl}/>
    </Flex>
  );
}