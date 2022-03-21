
import { useSearchParams} from "react-router-dom";
import { useEffect } from "react";


function Validate() {
    const [queryParams] = useSearchParams();
    const param = queryParams.get('token')

   
    useEffect(() => {
        fetch(`http://localhost:4000/auth/validate?token=${param}`)
            .then(d => d.json())
            .then(data => console.log(data))

    },[]);


    return( 
        
        // {/* <Button  /* onClick={handleValidate} */>Volver</Button> */}
    
    <h1>Registro completado</h1>
    
    

   
    )
}

export default Validate;