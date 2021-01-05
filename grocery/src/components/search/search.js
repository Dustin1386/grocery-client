import React, { Component } from 'react'
import './search.css'



class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
          newItem: "",
          list: [],
          location: ""
        };
      }
    
      updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
      }
    
      addItem() {
        // create a new item
        const newItem = {
          id: 1 + Math.random(),
          value: this.state.newItem.slice()
        };
    
        // copy current list of items
        const list = [...this.state.list];
    
        // add the new item to the list
        list.push(newItem);
    
        // update state with new list, reset the new item input
        this.setState({
          list,
          newItem: ""
        });
      }
    
      deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);
    
        this.setState({ list: updatedList });
      }
    
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <h3 className="App-title">Add your item and its location</h3>
            </header>
            <div
            >
             <h3>Add an item to the list</h3> 
              <br />
              <input
                type="text"
                placeholder="Type item here"
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
              />
              <button
                onClick={() => this.addItem()}
                disabled={!this.state.newItem.length}
              >
                &#43; Add
              </button>
              <br /> <br />
              <ul>
                {this.state.list.map(item => {
                  return (
                    <li key={item.id}>
                      {item.value}
                      <button onClick={() => this.deleteItem(item.id)}>
                        Remove
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      }
    }

export default Search