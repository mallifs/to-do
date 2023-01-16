import React from "react";
class Hobbies extends React.Component{
    render(){
        const Array = [
            <p>Driving</p>,
            <p>Playing soccer</p>,
            <p>Reading</p>

        ]
        return(
            <div> 
                <h3>Hobbies</h3>
                {Array}
            </div> 
          
        )
     }

}

export default Hobbies;