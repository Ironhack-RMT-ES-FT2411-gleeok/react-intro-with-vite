import ProjectLink from "./ProjectLink"
import flappyImg from "../assets/flappybird.jpg"

function Project() {

  const gameInfo = {
    name: "Flappy Bird",
    highScore: 10
  }


  return (
    <section>
      <h4>{gameInfo.name}</h4>
      <p>High Score: {gameInfo.highScore}</p>
      {/* <img src="https://programamos.es/web/wp-content/uploads/2016/10/flappybird.jpg" alt="flappy" width="300px"/> */}

      <img src={flappyImg} width="300px"/>

      <ProjectLink />
    </section>
  )

}

export default Project