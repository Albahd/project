
import { useState } from "react"
import { ThemingContext } from "./theming.context"


const light={
    primary:"primary",
    dark:"dark",


}

const dark={
    primary:"secondary",
    dark:"light"


}




function ThemingProvider({children}) {

    const [theming, updateTheming] = useState(light);
    let [logName,setLogName] = useState('')
    const changeTheme = () =>
    {
        updateTheming( v => v === light? dark: light)
    }

    

    return (

        <ThemingContext.Provider value={[theming, updateTheming,changeTheme, logName,setLogName]}>
            {children}

        </ThemingContext.Provider>

    )

}

export default ThemingProvider