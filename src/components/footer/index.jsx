import styles from './footer.module.css';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <span className={styles.logo}>CRUD </span>
            </div>
            <div className={styles.copyrightPlace}>
                <p>Todos os diretios reservados a @@@@</p>
            </div>
        </div>
    )
}

export default Footer