import { Box, Button, Checkbox, Flex, Icon, Link, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SectionContent } from "../../components/SectionContent";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const { data } = await api.get(`users/${userId}`)

      return data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }

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

            <NextLink href="/users/create" passHref>
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
            </NextLink>
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
                              <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                <Text fontWeight="bold">{user.name}</Text>
                              </Link>
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
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}