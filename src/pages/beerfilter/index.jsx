import { useLocation } from "react-router-dom"



function BeerFilter(props){

    const location = useLocation()
    const arrbeer = location.state
    console.log(arrbeer)
    let tipo = props.tag
    console.log(tipo)

    arrbeer.filter(v =>v.categories 
        
        )

    return(


    <h1> hoja de cervezas filtrada</h1>
    )

}

export default BeerFilter