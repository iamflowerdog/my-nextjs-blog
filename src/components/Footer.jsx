import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Tech</NavLink>
                <NavLink href="/life">Life</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">More</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} 杨勇海. 版权所有 <Link href='https://beian.miit.gov.cn/#/Integrated/recordQuery' className = ' text-blue-400'>
                京ICP备2021019798号
                </Link>
                &nbsp;
                <Link href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502045123' className = ' text-blue-400'>
                京公网安备11010502045123
                </Link>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
