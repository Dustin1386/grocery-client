import React, { Component } from 'react'
import './popout.css';
import Nav from '../nav/nav'


class Product extends Component {
//main constructor which holds state
    constructor(props) {
        super(props);
        this.state = {  
          name:"",
          newItem: "",
          inputTargetValue: "",
          showMe: false
        };
       
      }
    // handles the function of adding a product to the database   
      handleAddProduct = (name,location) =>{  
        let payload = { name:name, location:location};
        console.log(payload)
        return fetch('https://arcane-headland-93940.herokuapp.com/api/items', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(err => Promise.reject(err))
                : res.json()
            )
      }
      // handles the process of running function when form is submitted 
    handleSubmit = (e) =>{
        e.preventDefault();
        const {name, location}=e.target
        this.handleAddProduct(name.value, location.value);
        this.setState({
            showMe:true,
            name:name.value
        })
   }


    
     // renders html for the product page 
      render() {
        return (
          <div>
            <Nav />
          <div className="mainText">
              <form onSubmit = {(e)=> this.handleSubmit(e)}>
              <label className="subText2" htmlFor="input-a">Product </label>
            <input className="subText" type="text"  name="name"  required></input>
            <label className="subText2" htmlFor="input-a">Aisle </label>
            <input className="subText" type="number" min="1" step="1" name="location"  required></input>
            <button type="submit">Add me</button>
              </form>
              <div>
               
              {this.state.showMe? <div className="popOut sb1" >{`${this.state.name}`} have been added</div>:null}
              </div>
          </div>
          </div>
        );
      }
    }

export default Product

