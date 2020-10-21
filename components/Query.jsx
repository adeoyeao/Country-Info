import Filter from "./Filter"
import Search from "./Search"
import styles from "../styles/components/query.module.scss"

const Query = (props) => {
      return (
            <header className={styles.query}>
                  <Search />
                  <Filter handleFilter={props.handleFilter}/>
            </header>
      )
}

export default Query