import { useState } from "react";
import { IdiomContext } from "./createcontext";

function IdiomProvider({ children }) {
    const idiomState = useState('es')
    

    return (
       
            <IdiomContext.Provider value={idiomState}>
                {children}
            </IdiomContext.Provider>
      
    )


}

export default IdiomProvider