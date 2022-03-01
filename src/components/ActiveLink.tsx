import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps{
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  const asPathIsEqualHref = asPath === rest.href || asPath === rest.as
  const asPathStartWithHref = asPath.startsWith(String(rest.href))
  const asPathStartWithAs = asPath.startsWith(String(rest.as))
  let isActive = false;

  if (shouldMatchExactHref && asPathIsEqualHref) {
    isActive = true
  }
  
  if (!shouldMatchExactHref && (asPathStartWithHref || asPathStartWithAs)) {
    isActive = true
  }  

  return (
    <Link {...rest}>
      { cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      }) }
    </Link>
  )
}