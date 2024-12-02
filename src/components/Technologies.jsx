const sectionStyles = {
  backgroundColor: "lightblue",
  color: "darkblue",
  padding: "10px",
  margin: "10px"
}

function Technologies() {
  
  return (
    <section style={sectionStyles}>

      <h3 style={{color: "red"}}>Tecnologias usadas</h3>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>DOM</li>
        <li>Clases</li>
      </ul>

    </section>
  )

}

export default Technologies