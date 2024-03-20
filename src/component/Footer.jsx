import styles from './Footer.module.css';


export default function Footer(){

    return (
        <div>
            <div className={styles.navbar}>
                <ul className={styles.desktopmenu}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <hr/>
            <p>Copyright &#169; 2024 Juanwei Hu. All Rights Perserved</p>

        </div>

    )
}