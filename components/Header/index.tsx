'use client'
import Link from 'next/link'
import { NavLinks } from '@/constants'
import { usePathname } from 'next/navigation'

export interface HeaderProps {}

function Header(props: HeaderProps) {
    const pathname = usePathname()

    return (
        <header className="w-full fixed bg-white border-b border-gray-100 px-24 z-50">
            <nav className="py-4">
                <div className="flex items-center">
                    <Link href="/" className="w-1/6 flex items-center justify-center text-red-600 text-2xl font-black ">
                        MLD
                    </Link>
                    <ul className="flex w-5/6 justify-end items-center">
                        {NavLinks.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={link.href}
                                    className={`block py-2 px-4 transition duration-300 ${
                                        link.href === pathname ? 'text-red-500' : 'text-black hover:text-red-500'
                                    }`}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
