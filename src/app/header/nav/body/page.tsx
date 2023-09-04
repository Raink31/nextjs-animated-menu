import { JSX, ReactNode } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { translate, blur } from '../../anim'

export default function index({links, selectedLink, setSelectedLink} : {links: any, selectedLink: any, setSelectedLink: any}) {

    const getChar = (title:string) => {
        let chars: JSX.Element[] = []
        title.split('').forEach((char:string, index:number) => {
            chars.push(
                <motion.span custom={[index * 0.04, (title.length - index) * 0.02]} variants={translate} initial='initial' animate='enter' exit="exit" key={`c_${index}`}>
                    {char}
                </motion.span>
            )
        })
        return chars
    }

    return (
        <div className="body flex flex-wrap lg:max-w-[1200px] lg:mt-[80px]">
            {links.map((link: { title: any; href: any }, index: any) => {
                const {title, href} = link;
                return (
                    <Link 
                    href={href} 
                    key={`l_${index}`} 
                    onMouseOver={() => {setSelectedLink({ isActive: true, index })}}
                    onMouseLeave={() => {setSelectedLink({ isActive: false, index})}}>
                        <motion.p variants={blur} initial="initial" animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"} className='text-black text-[32px] font-[300] pl-[10px] pt-[30px] uppercase lg:text-[5vw] lg:pr-[2vw] flex overflow-hidden'>{getChar(title)}</motion.p>
                    </Link>
                    )
                })
            }
        </div>
    )
}


