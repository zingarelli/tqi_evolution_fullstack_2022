import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.container}>
            <p>Projeto desenvolvido por <a href="https://www.linkedin.com/in/zingarelli/" target="_blank" rel="noopener noreferrer">Matheus Ricardo Uihara Zingarelli</a> para participação no Processo Seletivo TQI FullStack 2022</p>
        </footer>
    )
}

export default Footer;