import Link from "next/link"
import styles from "../styles/components/back.module.scss"

const Back = () => {
      return (
            <Link href="/">
                  <a className={styles.back}>Back</a>
            </Link>
      )
}

export default Back