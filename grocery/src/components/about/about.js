import React, { Component } from 'react'
import Nav from '../nav/nav'


class About extends Component {



//renders html for About page
    render() {
        return (
            <body >
                <Nav />
                <div className="mainText">
                <h1 className="subText2">About The App</h1>
                <h3 className="subText2">I created this application because I often have no idea where 
                items are. It can be frustrating, so I decided to take action and create this revolutionary product. 
                </h3>
               </div>
    
    
            </body>
        )
    }

}


export default About