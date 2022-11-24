const Curso = (propiedades) => {
    return (
        <>
        <hr></hr>
        <h2>{propiedades.curso}</h2>
        <div>Profesor: <span>{propiedades.profesor}</span> </div>
        <div>Duracion: <span>{propiedades.duracion}</span> </div>
        </>
    )
}
export default Curso;