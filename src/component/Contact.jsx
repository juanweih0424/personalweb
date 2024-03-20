import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

export default function Contact(){
    
    return (
        <div id="contact" className={styles.container}>
            <div className={styles.title}>Contact Me</div>
             <div className={styles.box}>
                <div className={styles.contact}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                <p className={styles.font}>jha387@sfu.ca</p>
                </div>
                <div className={styles.contact}>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                <p className={styles.font}>(778)-839-6211</p>
                </div>
             </div>
        </div>
    )
}