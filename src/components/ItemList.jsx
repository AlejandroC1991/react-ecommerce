import Item from "./Item"


const ItemList = (props) => {
    return (
        <>
            <div className="container ">
                <div className="row vw-100" >
                    
                        {   
                             props.datos.map(item => <Item key={item.id} id={item.id} title={item.title} model={item.model} precio={item.precio}  description={item.description} priority={item.priority} category={item.category} image={item.image} stock={item.stock}/>)
                            
                        }
                    </div>
                </div>
        </>
    )
}

export default ItemList;