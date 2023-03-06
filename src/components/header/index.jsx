import React from 'react'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const goAgenda = () => {
        navigate('agenda-corte')
    }

    const goCaixa = () => {
        navigate('caixa')
    }

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer} onClick={() => goCaixa()}>
                <span>Controle de caixa</span>
            </div>
            <div className={styles.linksContainer}>
                <ul className={styles.listaLinks}>
                    <a href='/'>Home</a>
                    <li onClick={() => goAgenda()}>Agendar Corte</li>
                    <a href=''>Tattoo</a>
                    <a href=''>Piercing</a>
                </ul>
            </div>
        </div>
    )
}

export default Header