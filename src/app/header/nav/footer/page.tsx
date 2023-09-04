import styles from './style.module.scss'
import { translate } from '../../anim'
import { motion } from 'framer-motion'

export default function index() {
    return (
        <footer className='flex text-[12px] mt-[40px] flex-wrap items-end lg:justify-between uppercase gap-y-2'>
            <ul className='p-0 w-[50%] overflow-hidden lg:w-auto'>
                <motion.li custom={[0.2, 0]} variants={translate} initial='initial' animate='enter' exit='exit'> 
                    <span className='text-[#9f9689]'>Made By:</span>Studio Lumio
                </motion.li>
            </ul>
            <ul className='p-0 w-[50%] overflow-hidden lg:w-auto'>
                <motion.li custom={[0.2, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
                    <span className='text-[#9f9689]'>Typography</span>Google Fonts
                </motion.li>
            </ul>
            <ul className='p-0 w-[50%] overflow-hidden lg:w-auto'>
                <motion.li custom={[0.2, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
                    <span className='text-[#9f9689]'>Images</span>FREEPIK, ENVATO
                </motion.li>
            </ul>
            <ul className='p-0 w-[50%] overflow-hidden lg:w-auto'>
                <motion.li custom={[0.2, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
                    PRIVACY POLICY
                </motion.li>
                <motion.li custom={[0.2, 0]} variants={translate} initial='initial' animate='enter' exit='exit'>
                    Terms and Conditions
                </motion.li>
            </ul>
        </footer>
    )
}