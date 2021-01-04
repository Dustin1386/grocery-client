import React, { Component } from 'react'



class Product extends Component {




    render() {
        return (
            <body >
                <h3>Do you have a product that you know the location of in your local store?<br/>
                Enter it here and add to the growing list of found items </h3>
                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                <button onClick={() => this.moveToNextWord}>Search</button>
    
    
            </body>
        )
    }

}


export default Product