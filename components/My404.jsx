import styles from "../styles/components/my404.module.scss"
import Back from "./Back"
const My404 = () => {
      return (
            <section className={styles.my404}>
                  <div className={styles.grid}>
                  <h2>Unfortunately this page could not be found.</h2>
                  <div className={styles.inner}>
                  </div>
                  </div>
                  <Back />
            </section>
      )
}

export default My404