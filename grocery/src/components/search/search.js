import React, { Component } from 'react'
import './search.css'
import Nav from '../nav/nav'



class Search extends Component {

    state = {
        //should items just be empty array
        items: [],
        inputValue: '',
        showMe: false    
        
    } 

    
    //provides the function to search by filtering items then returns the filtered items that match the input
    handleSearch = () => {
    //  this.setState({items:this.state.items.filter(item => {
    //     return item.name.toLocaleLowerCase()  === this.state.inputValue.toLocaleLowerCase()
        
    //  })})
   
    }
//basic fetch call to return all items
    getAllItems = () =>{
        fetch('http://localhost:8000/api/items')
     .then(res => res.json())
     .then((data) => {
         console.log("got items", data)
         this.setState({items:data})
     })
     .catch(console.log)
}
//resets the page 
 clearAll = () =>{
     window.location.reload(false)
 }
//when page is loaded it sets the state and loads the data
componentDidMount(){
    this.getAllItems()
    this.setState({
        showMe:false
    })
}    
//upon submission we instantiate the search function and sets state showMe to true
handleSubmit = (event) => {
    event.preventDefault();
    this.handleSearch();
    this.setState({
        showMe:true,
        

    })     
  }; 


//sets the input value according to the targeted input
handleOnChange = (e) =>{
    this.setState({
        inputValue: e.target.value
    })
}


//renders page
    render() {
     
        const filteredItems = (this.state.items.filter(item => {
                return item.name.toLocaleLowerCase()  === this.state.inputValue.toLocaleLowerCase()
        }))
        return (
            <div>
                <Nav />
                <div className="mainText" >
               <form className="subText2" onSubmit={(e)=>this.handleSubmit(e)}>
                <h3>Enter your item to seach for </h3>
                <label htmlFor="Search">Search by Name</label>
                <input type="text" 
                onChange = {this.handleOnChange}
                value={this.state.inputValue}
                required minLength="2" 
                maxLength="12" 
                size="10" />
                <button>Search</button>
            
                </form> 
                <button  onClick={()=>this.clearAll()}>Clear</button>
                {
                    this.state.showMe? 
                <div className="popOut sb1"> {filteredItems.length === 0? "not found":""}
                    {this.state.items && filteredItems.map(item =>{
                        return <div key = {item.id}>{item.name} on aisle {item.location}</div>
                    })}
                </div>
                :null
    } 
            </div>
            </div>
            
            
        )
        
    }
    
}


export default Search