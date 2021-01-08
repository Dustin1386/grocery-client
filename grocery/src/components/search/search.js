import React, { Component } from 'react'
import './search.css'
import config from '../../config'





class Search extends Component {

    state = {
        //should items just be empty array
        items: [],
        // item: {},
        // isItemViewOn: false,
        // sortValue: '',
        // inputValue: ''
    }

    

    handleSearch = async (items) => {
     fetch('http://localhost:8000/api/items')
     .then(res => res.json())
     .then((data) => {
         this.setState({items: data})
     })
     .catch(console.log)
    }
    checkItem = (e) =>{
        e.preventDefault();
        this.state.items.filter(item =>{
            item.includes(e.target.value)
        })
        .map(item =>{
            return <p>{item.name}</p>
        })
    }

componentDidMount(){
   this.handleSearch()
}    

handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch(this.state.items);
    this.setState({ items: '' });
  };

// searchItems = (e) =>{
//     console.log('test change',e.target.value)
//     this.setState({
//         inputValue: e.target.value
//     })
// }



    render() {
        const filteredItems = 
        this.state.items[this.state.items] || "dog poop"
        console.log(this.state.items)
        return (
            <div >
               <form onSubmit={this.checkItem}>
                {filteredItems}
                <h3>Enter your item to seach for </h3>
                <label htmlFor="Search">Search by Name</label>
                <input type="text" 
                value={this.state.inputValue}
                required minLength="4" 
                maxLength="8" 
                size="10" />
                <button>Add Item</button>
                </form> 
            </div>
            
            
        )
        
    }
    
}


export default Search