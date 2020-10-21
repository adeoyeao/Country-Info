const Heading = (props) => {
      return (
            props.type === "primary" ? 
            <h1>{props.head}</h1> :
            <h2>{props.head}</h2> 
      )
}

export default Heading