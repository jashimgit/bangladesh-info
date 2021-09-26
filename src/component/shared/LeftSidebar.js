import React from 'react';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';
import styles from '../styles/LeftSidebar.module.css';

export default function LeftSidebar() {
    return (
        <div>
            <h4 className="text-center pt-3">Shopkpr</h4>
            <nav className='nav flex-column'>
                <a className={`${styles.navlink} active nav-link `} href='/'>
                    <AiOutlineUser /> Admin
                </a>
                <a className={`${styles.navlink} nav-link `} href='/#'>
                    <AiOutlineHeart /> Products
                </a>
                <a className={`${styles.navlink} nav-link `} href='/#'>
                    <BsGear /> Settings
                </a>
                <a className={`${styles.navlink} nav-link `} href='/#'>
                    <FiHelpCircle /> Helps
                </a>
            </nav>
        </div>
    );
}
