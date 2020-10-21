import { useState } from "react"
import Link from "next/link"
import styles from "../styles/components/search.module.scss"

const Search = () => {
      const [ input, setInput ] = useState("")
      const [country, setCountry ] = useState([])

      const handleChange = (e) => {
            const value = e.target.value 
            setInput(value)
            if(!value) {
                  return setCountry([])
            }
            fetch("/search", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify({search: value})
            })
            .then(response => response.json())
            .then(data => !data.status ? setCountry(data) : setCountry("No country found"))
            .catch(err => {
                  console.error(err)
            })
      }

      const handleBlur = () => {
            setCountry([])
      }

      return (
            <div className={styles.search}>
                  <input 
                  type="text" name="search" placeholder="Search for a country..."
                  value={input} onChange={handleChange} 
                  autoComplete="off"/>
                  { country !== "No country found" ?
                   country.slice(0, 10).map(obj => <Link href={obj.name === "Åland Islands" ? "Aland Island" : obj.name}><a>
                         {obj.name}</a></Link>) :
                   <p onClick={handleBlur}>No country found</p>}
            </div>
      )
}

export default Search