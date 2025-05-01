// components/NavLink.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'px-4 py-2 text-sm font-medium',
        isActive ? 'text-blue-600 ' : 'text-white hover:text-blue-600'
      )}
    >
      {children}
    </Link>
  )
}
