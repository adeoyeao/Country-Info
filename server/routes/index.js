const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router()

router.use(express.json())
router.use(bodyParser.urlencoded({extended: true}))

let dark = false

router.get("/all", (req, res) => {
      const url = "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      fetch(url)
      .then(response => response.json())
      .then(data => res.send(data))
      .catch(err => (console.error(err)))
}) 

router.post("/search", (req, res) => {
      const name = req.body.search
      const url = `https://restcountries.eu/rest/v2/name/${name}?fields=name;`
      fetch(url)
      .then(response => response.json())
      .then(data => res.send(data))
      .catch(err => console.error(err))
})

router.post("/country", (req, res) => {
      const country = req.body.country
      const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true&fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;flag`
      fetch(url)
      .then(response => response.json())
      .then(data => res.send(data))
      .catch(err => (console.error(err)))
})

module.exports = router