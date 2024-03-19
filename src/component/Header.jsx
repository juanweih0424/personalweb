import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 1024 && open) {
            setOpen(false);
            toggleMenu();
          }
        }
        
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, [open]);

    const toggleMenu = () => {  
        setOpen(!open);
        
        const body = document.querySelector('body');
        if (open) {
          body.classList.remove(styles.bodyPush);
        } else {
          body.classList.add(styles.bodyPush);
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>Juanwei Hu</div>
                <button onClick={toggleMenu} className={styles.navbtn} title="Menu">
                    <FontAwesomeIcon icon={open ? '' : faBars} />
                </button>
                <ul className={styles.desktopmenu}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {open && (
                <div className={styles.backdrop} onClick={toggleMenu}></div>
            )}
            {open && (
                
            <div className={styles.fullscreenNav}>
                <ul className={styles.hamburger}>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
            )}
        </div>
    );
}
