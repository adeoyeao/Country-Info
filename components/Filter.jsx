import { useState } from "react"
import styles from "../styles/components/filter.module.scss"

const Filter = (props) => {
      const [ visible, setVisible ] = useState(false)

      const handleClick = () => {
            setVisible(!visible)
      }

      return (
            <div className={styles.filter}>
                  <div onClick={handleClick} className={styles.select}>Filter by Region</div>
                  {visible &&
                  <div className={styles.dropdown}>
                        <p onClick={() => props.handleFilter("All")}>All</p>
                        <p onClick={() => props.handleFilter("Africa")}>Africa</p>
                        <p onClick={() => props.handleFilter("Americas")}>Americas</p>
                        <p onClick={() => props.handleFilter("Asia")}>Asia</p>
                        <p onClick={() => props.handleFilter("Europe")}>Europe</p>
                        <p onClick={() => props.handleFilter("Oceania")}>Oceania</p> 
                  </div> }
            </div>
      )
}

export default Filter