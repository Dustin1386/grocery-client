import React, { Component } from 'react'
import './popout.css';
import Nav from '../nav/nav'


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {  
          name:"",
          newItem: "",
          inputTargetValue: "",
          showMe: false
        };
       
      }
      
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

    handleSubmit = (e) =>{
        e.preventDefault();
        const {name, location}=e.target
        this.handleAddProduct(name.value, location.value);
        this.setState({
            showMe:true,
            name:name.value
        })
   }


    
      
      render() {
        return (
          <div className="mainText">
            <Nav />
              <form onSubmit = {(e)=> this.handleSubmit(e)}>
              <label className="subText2" htmlFor="input-a">Product </label>
            <input className="subText" type="text" name="name"  required></input>
            <label className="subText2" htmlFor="input-a">Location </label>
            <input className="subText" type="text" name="location"  required></input>
            <button type="submit">Add me</button>
              </form>
              <div>
               
              {this.state.showMe? <div className="popOut sb1" >{`${this.state.name}`} have been added</div>:null}
              </div>
          </div>
        );
      }
    }

export default Product

