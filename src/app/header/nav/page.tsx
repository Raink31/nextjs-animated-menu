"use client";

import styles from '@/app/header/nav/style.module.scss'
import { motion } from 'framer-motion'
import { height } from '../anim'
import Body from './body/page'
import { useState } from 'react';
import Image from '@/app/header/nav/image/page'
import Footer from './footer/page'

export default function Index() {

    const links = [
        {
            title: "Home",
            href: "/",
            src: "home.png"
        },
        {
            title: "Shop",
            href: "/shop",
            src: "shop.png"
        },
        {
            title: "About Us",
            href: "/aboutus",
            src: "home.png"
        },
        {
            title: "Lookbook",
            href: "/lookbook",
            src: "lookbook.png"
        },
        {
            title: "Contact",
            href: "/contact",
            src: "contact.png"
        },
    ]

    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})

    return (
        <motion.div className='overflow-hidden' variants={height} initial="initial" animate="enter" exit="exit">
            <div className="wrapper mb-0 flex gap-16">
                <div className="container">
                    <Body links= {links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                    <Footer />
                </div>
                <Image 
                    src={links[selectedLink.index].src}
                    isActive={selectedLink.isActive}
                />
            </div>
        </motion.div>
    )
}