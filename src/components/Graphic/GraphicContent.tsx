import { Box, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface SeriesProps {
  name: string;
  data: number[];
}

interface GraphicContentProps {
  children: React.ReactNode;
  options: ApexOptions
  series: SeriesProps[]
}

export function GraphicContent({children, options, series}: GraphicContentProps) {
  return (
    <Box
      p="8"
      bg="gray.800"
      borderRadius={8}
      pb="4"
      >
      <Text fontSize="lg" mb="4">{children}</Text>
      <Chart options={options} series={series} type="area" height={160}/>
    </Box>
  )
}