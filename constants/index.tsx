import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import localFont from 'next/font/local'

export type handleO = { value: string; urlImg: string; id: number }
export type handleA = handleO[]
export type umbrellaO = { id: number; name: string; sizeHandle: number; handle: handleA }
export type umbrellaA = umbrellaO[]

export const nameSite = 'MLD'
export const logo = '/logo.png'

export const listSocialMediaLink = [
    {
        src: 'https://facebook.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
        src: 'https://instagram.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
        src: 'https://youtube.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
        src: 'https://tiktok.com',
        text: 'Facebook',
        icon: <FontAwesomeIcon icon={faTiktok} />,
    },
]

const font01 = localFont({ src: '../fonts/fonts-convert/font01.ttf' })
const font02 = localFont({ src: '../fonts/fonts-convert/font02.ttf' })
const font03 = localFont({ src: '../fonts/fonts-convert/font03.ttf' })
const font04 = localFont({ src: '../fonts/fonts-convert/font04.ttf' })
const font05 = localFont({ src: '../fonts/fonts-convert/font05.ttf' })
const font06 = localFont({ src: '../fonts/fonts-convert/font06.ttf' })
const font07 = localFont({ src: '../fonts/fonts-convert/font07.ttf' })
const font08 = localFont({ src: '../fonts/fonts-convert/font08.ttf' })
const font09 = localFont({ src: '../fonts/fonts-convert/font09.ttf' })
const font10 = localFont({ src: '../fonts/fonts-convert/font10.ttf' })
const font11 = localFont({ src: '../fonts/fonts-convert/font11.ttf' })
const font12 = localFont({ src: '../fonts/fonts-convert/font12.ttf' })
const font13 = localFont({ src: '../fonts/fonts-convert/font13.ttf' })
const font14 = localFont({ src: '../fonts/fonts-convert/font14.otf' })
const font15 = localFont({ src: '../fonts/fonts-convert/font15.ttf' })
const font16 = localFont({ src: '../fonts/fonts-convert/font16.otf' })
const font17 = localFont({ src: '../fonts/fonts-convert/font17.ttf' })
const font18 = localFont({ src: '../fonts/fonts-convert/font18.ttf' })
const font19 = localFont({ src: '../fonts/fonts-convert/font19.ttf' })
const font20 = localFont({ src: '../fonts/fonts-convert/font20.ttf' })

export const engraveFonts = [
    font01,
    font02,
    font03,
    font04,
    font05,
    font06,
    font07,
    font08,
    font09,
    font10,
    font11,
    font12,
    font13,
    font14,
    font15,
    font16,
    font17,
    font18,
    font19,
    font20,
]

export const NavLinks = [
    {
        href: '/',
        key: 'Home',
        text: 'Home',
    },
    {
        href: '/about',
        key: 'About',
        text: 'About',
    },
    {
        href: '/services',
        key: 'Services',
        text: 'Services',
    },
    {
        href: '/engrave',
        key: 'Engrave',
        text: 'Engrave',
    },
    {
        href: '/portfolio',
        key: 'Portfolio',
        text: 'Portfolio',
    },
    {
        href: '/news',
        key: 'News',
        text: 'News',
    },
    {
        href: '/contact',
        key: 'Contact',
        text: 'Contact',
    },
]

export const footerMenuList = []

export const sizeHandle = [
    {
        name: '8 cm',
        value: 8,
    },
    {
        name: '12 cm',
        value: 12,
    },
]

export const kindHandle = [
    {
        name: 'CN',
        value: 'cn',
    },
    {
        name: 'Trắc/Mun',
        value: 'tm',
    },
]

export const umbrellas: umbrellaA = [
    {
        id: 0,
        name: 'Chagoi',
        sizeHandle: 8,
        handle: [{ value: 'tm', urlImg: 'chagoi-den.jpg', id: 0 }],
    },
    {
        id: 1,
        name: 'G27',
        sizeHandle: 12,
        handle: [
            { value: 'cn', urlImg: 'g27-cn.jpg', id: 0 },
            { value: 'tm', urlImg: 'g27-trac.jpg', id: 1 },
        ],
    },
    {
        id: 2,
        name: 'G30',
        sizeHandle: 12,
        handle: [
            { value: 'cn', urlImg: 'g30-cn.jpg', id: 0 },
            { value: 'tm', urlImg: 'g30-trac.jpg', id: 1 },
        ],
    },
]
