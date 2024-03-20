import React from 'react';
import styles from './Projects.module.css';
import medclerx from '../assets/medclerx.png';
import webcrawler from '../assets/project2.png';
import multi from '../assets/project1.png';

export default function Projects(){

    const open = () =>{
        window.open("https://www.figma.com/proto/QFZnhEkKqEpjXGkA2kDKiF/MVP-Patient-Portal-Mock-Up?node-id=4-20&starting-point-node-id=4%3A20&mode=design&t=jX4Ek7k43xnVwtkA-1","_blank");
    }

    const openGit1 = () =>{
        window.open("https://github.com/juanweih0424/ICS53-multithreading","_blank");
    }

    const openGit2 = () =>{
        window.open("https://github.com/juanweih0424/Search-engine","_blank");
    }

    return (
        <div id='projects' className={styles.container}>
        <div className={styles.title}>Projects</div>
            <div className={styles.projectContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.project}>
                        <p>Front-end Development</p>
                        <img src={medclerx} className={styles.pics}/>
                        <button className={styles.btn} onClick={open}>Figma Presentation</button>
                    </div>
                    <div className={styles.intro}>
                        <p>1. Designed and established Figma mock-ups to guide the development process, ensuring a clear and efficient workflow for the project.</p>
                        <p>2. Collaboratively developed web front-end features as part of a team of three interns, primarily utilizing Javascript and React.js.</p>
                        <p>3. Managed code quality and version control using GitHub, including frequent commits, pull requests, and branch management.</p>
                        <p>4. Managed code quality and version control using GitHub, including frequent commits, pull requests, and branch management.</p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.project}>
                        <p>Multi-threading</p>
                        <img src={multi} className={styles.pics}/>
                        <button className={styles.btn} onClick={openGit1}>Github Repo</button>
                    </div>
                    <div className={styles.intro}>
                        <p>1. Spearheaded the development of a multithreading project using C, showcasing advanced programming and concurrency management skills</p>
                        <p>2. Using a linked list data structure to hold incoming jobs as a buffer allows for efficient management and processing of tasks in a dynamic, ordered sequence.</p>
                        <p>3. Implemented critical features like thread synchronization and data protection using mutex locks, ensuring thread safety and reliable data processing.</p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.project}>
                        <p>Web Crawler</p>
                        <img src={webcrawler} className={styles.pics}/>
                        <button className={styles.btn} onClick={openGit2}>Github Repo</button>
                    </div>
                    <div className={styles.intro}>
                        <p>1. Developed an advanced search engine featuring a web crawler, indexer, and tokenizer, utilizing Python.</p>
                        <p>2. Implemented a sophisticated tokenizer to enhance the search engine's ability to process and understand user queries. Integrated complex tokenization methods to refine search results, improving user experience.</p>
                        <p>3. Engineered a comprehensive web crawling algorithm to traverse and index web pages effectively.</p>
                        <p>4. Demonstrated strong proficiency in Python and algorithms, contributing to a complex, multifaceted project, proving adept at implementing complex algorithms in a real-world application, delivering a functional and efficient search tool.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}