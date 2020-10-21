import useSWR from "swr"
import { useState, useEffect } from "react"
import Head from "next/head"
import Header from "../components/Header"
import Query from "../components/Query"
import Card from "../components/Card"
import Loading from "../components/Loading"
import styles from "../styles/layouts/index.module.scss"

const Index = () => {
      const [ countries, setCountries ] = useState()
      const [ filter, setFilter ] = useState("All")

      const updateAll = () => {
            const fetcher = (...args) => 
            fetch(...args)
                  .then(res => res.json())
                  .then(data => {setCountries(data)})
            const { data, error } = useSWR("/all", fetcher)
      }

      updateAll()

      const handleFilter = (region) => {
            setFilter(region);
      }

      const [dark, setDark] = useState(false)
      
      const handleClick= () => {
            setDark(!dark)
      }

      return (
            
            !countries ? <Loading /> :
            <main className={dark ? styles.light : styles.dark}>
                  <Head>
                        <title>Country Info</title>
                  </Head>
                  <Header handleClick={handleClick} type="primary" dark={dark}/>
                  <Query handleFilter={handleFilter}/>
                  <section className={styles.countries}>
                  {filter === "All" ? countries.map((country, index) => <Card 
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                  key={index}
                  />) : 
                  countries.filter(filtercountry => filtercountry.region === filter)
                  .map((country, index) => <Card 
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  capital={country.capital}
                  region={country.region}
                  key={index}
                  />)}
                  </section>
            </main>
      )
}

export default Index