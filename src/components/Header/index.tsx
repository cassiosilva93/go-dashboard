import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="32"
          variant="unstyled"
          onClick={onOpen}
          mr="4"
        >

        </IconButton>
      )}
      <Logo />
      
      {isWideVersion && (<Search />)}

      <Flex 
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile
          showProfileData={isWideVersion}
          name="Cassio Oliveira Silva"
          email="cassio@gmail.com"
          avatarUrl="https://github.com/cassiosilva93.png" 
        />
      </Flex>
    </Flex>  
  )
}