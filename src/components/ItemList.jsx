import Item from "./Item"


const ItemList = (props) => {
    return (
        <>
            <div className="container">
                <div className="row" >
                    
                        {
                            props.datos.map(item => <Item key={item.id} id={item.id} title={item.title} model={item.model} precio={item.precio} cantidad={item.cantidad} description={item.description} priority={item.priority} category={item.category} image={item.image} />)
                        }
                    </div>
                </div>
        </>
    )
}

export default ItemList;