import styles from './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Router from '../src/routes'

function App() {

  return (
  <div className={styles.container}>
    <Header/>
    <Router />
    <Footer/>
  </div>
  )
}

export default App
