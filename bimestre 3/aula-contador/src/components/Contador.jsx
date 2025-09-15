import styles from './Contador.module.css'

export default function App(){
  return(
    <div className={styles.container} >
      <h1 className={styles.titulo} >Contador</h1>
      <div className={styles.contadorDisplay} id="counter">0</div>
      <div className={styles.botaoContainer}>
        <button className={styles.botao} onclick="decreaseCounter()">-</button>
        <button className={styles.botao} onclick="increaseCounter()">+</button>
      </div>
      <button className={styles.botao} onclick="resetCounter()">Reset</button>
    </div>
  )
}