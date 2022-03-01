import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SectionContent } from "../../components/SectionContent";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <SectionContent>Usuários</SectionContent>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={
                  <Icon as={RiAddLine} fontSize="20"/>
                }
                >
                Criar usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Cassio Oliveira</Text>
                    <Text fontSize="sm" color="gray.300">cassio@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize="16"/>
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Elanne Pereira</Text>
                    <Text fontSize="sm" color="gray.300">elanne@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize="16"/>
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">José da Silva</Text>
                    <Text fontSize="sm" color="gray.300">jose@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 2021</Td>}
                <Td>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    leftIcon={
                      <Icon as={RiPencilLine} fontSize="16"/>
                    }
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}