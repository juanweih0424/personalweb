import React, { useState } from 'react';
import styles from './About.module.css';
import profile from '../assets/profile1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export default function About(){
    
    return (
        <div id='about' className={styles.container}>
            <h1 className={styles.title}>
                About Me
            </h1>
            <div className={styles.sectionContainer}>
                <div className={styles.picContainer}>
                    <img src={profile}  className={styles.pic} alt="Juanwei Hu"/>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.icon}>
                            <FontAwesomeIcon icon={faUserGraduate} size='2x'/>
                        </div>
                        <div className={styles.degree}>
                            B.Sc Bachelors Degree
                        </div>
                        <div className={styles.school}>
                            University of California, Irvine
                        </div>
                        <div className={styles.degree}>
                            M.Sc Masters Degree
                        </div>
                        <div className={styles.school}>
                            Simon Fraser University
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}