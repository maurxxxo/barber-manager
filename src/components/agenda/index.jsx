import styles from './agenda.module.css'

const Agenda = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <div className={styles.barberPlace}>
                <span>Vini</span>
            </div>
            <div className={styles.barberPlace}>
                <span>Neves</span>
            </div>
            <div className={styles.barberPlace}>
                <span>Cark</span>
            </div>

            </div>
        </div>
    )
}

export default Agenda