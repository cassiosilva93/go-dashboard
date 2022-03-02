import { Heading } from "@chakra-ui/react";

interface SectionContentProps {
  children: React.ReactNode
}

export function SectionContent({ children, ...rest }: SectionContentProps) {
  return (
    <Heading
      size="lg"
      fontWeight="normal"
      {...rest}
    >
      {children}
    </Heading>
  )
}