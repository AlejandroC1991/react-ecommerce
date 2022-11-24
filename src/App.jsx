import Curso from "./Curso"
import Footer from "./Footer"

const App = () => {

  let name = "Alejandro"
  return (
    <>
    <h1>Hola</h1>
    <p>Javascript</p>
    <Curso curso="javascript" profesor="Gomez" duracion="9" />
    <Curso curso="react" profesor="messi" duracion="4" />
    <hr></hr>
    <Footer />
    </>
  )
}

export default App;