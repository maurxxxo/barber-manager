import styles from './caixa.module.css'

const Caixa = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Lançamentos do dia</h2>
                <div className={styles.tabelaPlatz}>
                    <table className={styles.tabela}>
                        <tr>
                            <th>Funcionario</th>
                            <th>Serviço</th>
                            <th>Valor</th>
                        </tr>
                        <tr>
                            <td>Neves</td>
                            <td>Cabelo e barba</td>
                            <td>70</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Caixa