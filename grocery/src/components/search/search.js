import React, { Component } from 'react'
import './search.css'


class Search extends Component {

    render() {
        return (
            <div >

                <h3>Enter your item to seach for </h3>
                <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                <button onClick={() => this.moveToNextWord}>Search</button>
    
    
            </div>
        )
    }

}


export default Search