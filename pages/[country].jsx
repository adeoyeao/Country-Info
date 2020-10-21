import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths } from "next"
import Head from "next/head"
import { useState } from "react"
import useSWR from "swr"
import Heading from "../components/Heading"
import Header from "../components/Header"
import Back from "../components/Back"
import Image from "../components/Image"
import Loading from "../components/Loading"
import styles from "../styles/layouts/country.module.scss"
import My404 from "../components/My404"

const Country = () => {

      const [countryData, setCountryData] = useState()
      const router = useRouter()
      let { country } = router.query
      country === "Åland Islands" && (country = "Aland Islands")

      const getData = () => {
      const fetcher = (...args) => 
            fetch(...args, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify({country: country})
            })
                  .then(res => res.json())
                  .then(data => {
                        data.status == 404 ? setCountryData("No data found") :
                        setCountryData(data[0]);
                  }).
                  catch(err => {
                        console.error(err);
                        setCountryData("No data found")
                  })
      const { data, error } = useSWR("/country", fetcher)
      }

      const [secondaryDark, setSecondaryDark] = useState(false)
      
      const handleClick= () => {
            setSecondaryDark(!secondaryDark)
      }

      getData()

      return (
      !countryData ? <Loading /> :
      countryData === "No data found" ? <My404 /> :
            <main className={secondaryDark ? styles.light : styles.dark}>
                  <Head>
                        <title>{ country }</title>
                  </Head>
                  <Header secondDarkClick={handleClick} type="secondary" secondaryDark={secondaryDark}/>
                  <Back />
                  <section className={styles.country}>
                  <Image flag={countryData.flag} />
                  <article>
                  <Heading head={countryData.name} type="primary"/>
                  <div>
                        <p>Native Name: {countryData.nativeName}</p>
                        <p>Population: {countryData.population}</p>
                        <p>Region: {countryData.region}</p>
                        <p>Sub Region: {countryData.subregion}</p>
                        <p>Capital: {countryData.capital}</p>
                  </div>
                  <div>
                        <p>Top Level Domain: {countryData.topLevelDomain}</p>
                        <p>Currencies: {countryData.currencies.map(currency => <span>{currency.name}</span>)}</p>
                  </div>
                  </article>
                  </section>
            </main>
      )
}

export default Country