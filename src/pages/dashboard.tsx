import { Flex, SimpleGrid } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { options } from '../utils/graphicOptions'
import { GraphicContent } from '../components/Graphic/GraphicContent';

const series = [
  { name: 'series1', data: [31100, 220, 430, 2335, 13240, 218] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" color="gray.50">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <GraphicContent options={options} series={series}>Inscritos da semana</GraphicContent>
          <GraphicContent options={options} series={series}>Taxa de abertura</GraphicContent>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}