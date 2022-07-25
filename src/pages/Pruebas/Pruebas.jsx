



export default function Pruebas() {

    return (<>
        <div>
            <h1>Pruebas</h1>
                <div>
                {Pruebas &&
                    Pruebas.map((test) =>{
                            return(<>
                                <h5>{test.title}</h5>
                                <p>{test.description}</p>
                                <p>{test.price}</p>
                                <form action="submit">
                                    <button>Añadete coño</button>
                                </form>
                                </>
                            )      
                            })}    
            </div>
        </div>
            
    
    </>
        
    )
}