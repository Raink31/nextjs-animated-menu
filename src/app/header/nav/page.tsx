"use client";

import styles from '@/app/header/nav/style.module.scss'
import { motion } from 'framer-motion'
import { height } from '../anim'
import Body from './body/page'
import { useState } from 'react';

export default function Index() {

    const links = [
        {
            title: "Home",
            href: "/",
            src: "home.png"
        },
        {
            title: "Shop",
            href: "/",
            src: "shop.png"
        },
        {
            title: "About Us",
            href: "/",
            src: "home.png"
        },
        {
            title: "Lookbook",
            href: "/",
            src: "lookbook.png"
        },
        {
            title: "Contact",
            href: "/",
            src: "contact.png"
        },
    ]

    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0})

    return (
        <motion.div className='overflow-hidden' variants={height} initial="initial" animate="enter" exit="exit">
            <div className="wrapper">
                <div className="container">
                    <Body links= {links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                    {/* <Footer /> */}
                </div>
                {/* <Image /> */}
            </div>
        </motion.div>
    )
}