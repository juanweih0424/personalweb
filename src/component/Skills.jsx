import styles from './Skills.module.css';


export default function Skills(){


    return (
        <div id='skills' className={styles.container}>
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.experienceBox}>
              <h2>Programming Languages</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>C</li>
              </ul>
            </div>
            <div className={styles.experienceBox}>
              <h2>Tools</h2>
              <ul>
                <li>MySQL</li>
                <li>VS Code</li>
                <li>Spark</li>
                <li>Github</li>
                <li>Figma</li>
                <li>JIRA</li>
              </ul>
            </div>
          </div>
        </div>
      );
      

}