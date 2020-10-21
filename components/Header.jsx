import Heading from "./Heading"
import styles from "../styles/components/header.module.scss"
import { useState, useEffect } from "react"

const Header = (props) => {
      const buttonStyle = {}
      props.dark || props.secondaryDark ? (buttonStyle.background = "#03aa70af", buttonStyle.color = "black") :
      (buttonStyle.background = "#2B3844", buttonStyle.color = "white")

      return (
            <header className={styles.header}>
                  <Heading type="secondary" head="Where in the world?" />
                  <button onClick={
                        props.type === "primary" ?
                        () => props.handleClick() :
                        () => props.secondDarkClick()} className={styles.button} style={buttonStyle}>
                        {props.dark || props.secondaryDark ? <img src="moon.svg"/> : <img src="sun.svg" /> } 
                        {props.dark || props.secondaryDark ? "Dark" : "Light"} Mode</button>
            </header>
      )
}

export default Header