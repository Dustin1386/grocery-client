import React, { Component } from 'react'
import './landing.css'
import Nav from '../nav/nav'


class Landing extends Component {




    render() {
        return (
            <body >
                <Nav />
                <div className="mainText">
                <h1 class="subText2">The Grocery Finder</h1>
                <p class="subText2">Don't get lost</p>
                <h3 class="subText2">Welcome to The Grocery Finder
                 where you can find the location of your products in your favorite grocery store. 
                </h3>
               <a href="/search"><button>try me</button></a>
               </div>
    
    
            </body>
        )
    }

}


export default Landing