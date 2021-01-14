import React, { Component } from 'react'
import './nav.css'


class Nav extends Component {




    render() {
        return (
          <div>
          <div className="sidebar">
          <div className="icon icon-1"><a href='/'>Home</a></div>
          <div className="icon icon-2"><a href='/search'>Search</a></div>
          <div className="icon icon-3"><a href='/product'>Add</a></div>
          <div className="icon icon-4"><a className="hideOn" href='/about'>About</a></div>
          </div>
          
          
          <div className="body-text">
          </div>
          </div>
       
        );
    }

}


export default Nav