import React, { useState } from 'react';
import styles from './Header.module.css';


export default function Header(){
    
    return (
        <div> 
            <nav className={styles.nav}> 
                <div className={styles.name}>Juanwei Hu</div>      
                    <ul>
                        <li className={styles.header}><a href="">About</a></li>
                        <li className={styles.header}><a href="">Projects</a></li>
                        <li className={styles.header}><a href="">Skills</a></li>
                        <li className={styles.header}><a href="">Contact</a></li>
                    </ul>
            </nav>
        </div>
    )
}

