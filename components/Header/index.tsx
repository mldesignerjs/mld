'use client'
import Link from 'next/link'
import { NavLinks, listSocialMediaLink, nameSite } from '@/constants'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export interface HeaderProps {}

function Header(props: HeaderProps) {
    const pathname = usePathname()
    const [isCloseMenu, setIsCloseMenu] = useState<boolean>(true)
    function handleCloseMenu() {
        setIsCloseMenu(!isCloseMenu)
    }

    return (
        <header className="w-full fixed bg-white border-b border-gray-100 lg:px-24 max-lg:px-4 z-50">
            <nav className="py-4">
                <div className="flex flex-wrap items-center justify-between">
                    <Link
                        href="/"
                        className={`transition-all delay-100 w-1/6 flex items-center justify-center text-main text-2xl font-black ${
                            isCloseMenu ? 'translate-x-0' : '-translate-x-[300px]'
                        }`}
                    >
                        {nameSite}
                    </Link>
                    <button
                        className="md: block lg:hidden z-30 w-8 h-8 rounded text-white bg-main"
                        onClick={handleCloseMenu}
                    >
                        {isCloseMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                    </button>
                    {!isCloseMenu && (
                        <div
                            onClick={() => setIsCloseMenu(true)}
                            className="w-screen h-screen bg-gray-600 opacity-50 absolute top-0 left-0 z-10"
                        ></div>
                    )}
                    <div
                        className={`transition-all lg:flex-wrap max-lg:flex-col lg:flex lg:w-5/6 lg:basis-auto lg:justify-end items-center max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:z-20 max-lg:w-1/2 bg-white max-lg:-translate-x-full max-lg:h-screen max-lg:basis-full ${
                            isCloseMenu ? '' : '!translate-x-0'
                        }`}
                    >
                        <ul className="transition-all flex max-lg:flex-col" style={{ height: 'calc(100% - 50px)' }}>
                            <Link
                                href="/"
                                className="lg:hidden py-4 text-center flex items-center justify-center text-main text-2xl font-black "
                            >
                                {nameSite}
                            </Link>
                            {NavLinks.map((link) => (
                                <li key={link.key} className="max-lg:border-b py-2 text-center">
                                    <Link
                                        href={link.href}
                                        className={`block py-2 px-4 transition duration-300 ${
                                            link.href === pathname ? 'text-main' : 'text-black hover:text-main'
                                        }`}
                                        onClick={() => setIsCloseMenu(true)}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="transition-all flex basis-full max-lg:justify-center lg:justify-end">
                            {listSocialMediaLink.map((socialMediaLink) => (
                                <li className="">
                                    <Link
                                        key={socialMediaLink.src}
                                        href={socialMediaLink.src}
                                        target="_blank"
                                        className="block px-4 py-3"
                                    >
                                        {socialMediaLink.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
