import { Heading } from "@chakra-ui/react";

interface SectionContentProps {
  children: React.ReactNode
}

export function SectionContent({children}: SectionContentProps) {
  return (
    <Heading size="lg" fontWeight="normal">{children}</Heading>
  )
}