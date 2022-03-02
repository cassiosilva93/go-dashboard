import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  const arrayLength = [...new Array(to - from)]
  const pages = arrayLength
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)

  return pages
}

export function Pagination({ 
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage,
  onPageChange }: PaginationProps
) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);
  const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (siblingsCount + 1) && (
          <>
            <PaginationItem number={1} />
            { currentPage > (siblingsCount + 2) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        <PaginationItem number={currentPage} isCurrent={true} />

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            { (currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}