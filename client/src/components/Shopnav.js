import React, { Component } from 'react'

class Shopnav extends Component {

  showItem = (e) => {
    this.props.showItem(e.target.id)
    console.log(e.target.id)
  }

render() {
    return (
      <div className="shop-wrapper">
        <div className="sidebar">
            <ul>
                <li id="item1" onClick={this.showItem}>
                    Monstera
                </li>
               <li id="item2" onClick={this.showItem}>
                    Cactuses
                </li>
               <li id="item3" onClick={this.showItem}>
                    Fernie Sanders
                </li>
               <li id="item4" onClick={this.showItem}>
                    Bonsai Trees
                </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Shopnav
