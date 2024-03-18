import React, { useState } from 'react';
import styles from './Intro.module.css';
import profilePic from '../assets/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Intro(){

    return (
        <div className={styles.container}>
            <a href={profilePic} target='_blank'><img className={styles.profile} src={profilePic} alt="My Picture"/></a>
            <div className={styles.textContainer}>
                <p className={styles.title}>Juanwei Hu</p>
                <p className={styles.subtitle}>Simon Fraser University</p>
                <p className={styles.subtitle}>Master of Professional Computer Science</p>
                <div className={styles.icons}>
                    <a href="https://www.linkedin.com/in/juanweihu/" target='_blank' title='LinkedIn'><FontAwesomeIcon icon={faLinkedin} className={styles.linkedin}/></a>
                    <a href="https://github.com/juanweih0424" target='_blank' title='Github Repo'><FontAwesomeIcon icon={faGithub} className={styles.github}/></a>
                </div>
            </div>
        </div>
    )
}

