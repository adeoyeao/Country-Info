import styles from "../styles/components/image.module.scss"

const Image = (props) => {
      return (
            <img src={props.flag} className={styles.image}/>
      )
}

export default Image