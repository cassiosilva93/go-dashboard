import { Box, Button, Checkbox, Flex, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SectionContent } from "../../components/SectionContent";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers()

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
            <Flex direction="row" alignItems="center">
              <SectionContent>Usuários</SectionContent>
              { !isLoading && isFetching && (
                <Spinner 
                  ml="4"
                  thickness='2px'
                  speed='0.65s'
                  color='gray'
                  size='sm'
                />
              ) }
            </Flex>

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

          { isLoading ? (
              <Flex justify="center">
                <Spinner 
                  thickness='4px'
                  speed='0.65s'
                  color='gray'
                  size='lg'
                />
              </Flex>
            )
            : error ? (
              <Flex justify="center">
                <Text>Erro ao recuperar dados :(</Text>
              </Flex>
            ) : (
              <>
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
                    { data.users.map(user => {
                      return (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.created_at}</Td>}
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
                      )
                    })}
                  </Tbody>
                </Table>

                <Pagination 
                  totalCountOfRegisters={data.total}
                  currentPage={5}
                  onPageChange={() => {}}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}