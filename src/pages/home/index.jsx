import styles from './home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span>Barbers:</span>
                <div className={styles.barberPlace}>
                <div className={styles.barbers}>
                    <span>Vini</span>
                    <span>Proximos clientes</span>
                    <span>15:30 - Fulano de tal</span>
                    <span>16:30 - Fulano de tal</span>
                    <span>17:30 - Fulano de tal</span>
                </div>
                <div className={styles.barbers}>
                    <span>Neves</span>
                    <span>Proximos clientes</span>
                    <span>15:30 - Fulano de tal</span>
                    <span>16:30 - Fulano de tal</span>
                    <span>17:30 - Fulano de tal</span>
                </div>
                <div className={styles.barbers}>
                    <span>Cark</span>
                    <span>Proximos clientes</span>
                    <span>15:30 - Fulano de tal</span>
                    <span>16:30 - Fulano de tal</span>
                    <span>17:30 - Fulano de tal</span>
                </div>
                </div>
                <span>Tattoo:</span>
                <div className={styles.tattooPlace}>
                    <div className={styles.tattoo}>
                        <span>Eder</span>
                        <span>14:30 ~ 20:30 - Tal fulano</span>
                    </div>
                    <div className={styles.tattoo}>
                        <span>Pedro</span>
                        <span>14:30 ~ 20:30 - Tal fulano</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home  