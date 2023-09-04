import styles from './style.module.scss'
import { opacity } from '../../anim'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function index({src, isActive} : {src: any, isActive: any}) {
    return (
        <motion.div variants={opacity} animate={isActive ? "open" : "closed"} className='hidden lg:block lg:w-[450px] lg:h-[520px] relative'>
            <Image 
                src={`/images/${src}`}
                fill={true}
                alt="image"
                className='lg:object-cover'
            />
        </motion.div>
    )
}