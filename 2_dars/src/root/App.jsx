import React from "react";
import ChildComponets from "../componets/Componet";

class App extends React.Component{
    render() {
        return (
            <div>
                <ChildComponets title = {'Webbrain'}>
                   <h3>Hi Children</h3>
            </ChildComponets> 
            </div>
        )
    }
}

export default App
  