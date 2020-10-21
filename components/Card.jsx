import Heading from "./Heading"
import styles from "../styles/components/card.module.scss"
import Link from "next/link"
import Image from "../components/Image"

const Card = (props) => {
      return (
            <article className={styles.card}>
                  <Link href={props.name === "Åland Islands" ? "Aland Island" : props.name}><a>
                        <div className={styles.cardFlag}><Image flag={props.flag} /></div>
                        <div className={styles.cardInfo}>
                        <Heading head={props.name}/>
                        <p><b>Population: </b>{props.population}</p>
                        <p><b>Region: </b>{props.region}</p>
                        <p><b>Capital: </b>{props.capital}</p>
                        </div>
                  </a></Link>
            </article>
      )
}

export default Card