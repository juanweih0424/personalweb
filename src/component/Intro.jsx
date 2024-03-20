import React, { useState } from 'react';
import styles from './Intro.module.css';
import profilePic from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Intro(){

    return (
        <div className={styles.container}>
            <div className={styles.picContainer}>
                <img src={profilePic} className={styles.profile} alt='Juanwei Hu'/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Juanwei Hu</h1>
                <p className={styles.info}>Simon Fraser University</p>
                <p className={styles.info}>Master in Professional Computer Science</p>
                <div className={styles.iconContainer}>
                    <a href="https://www.linkedin.com/in/juanweihu/" target="_blank" title="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin}  className={styles.linkedin}  />
                    </a>
                    <a href="https://github.com/juanweih0424" target="_blank" title="Github">
                        <FontAwesomeIcon icon={faGithub} className={styles.github} />
                    </a>
                </div>
            </div>
        </div>
    )
}

