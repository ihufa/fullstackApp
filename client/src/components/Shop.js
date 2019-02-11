import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/productsActions'

class Shop extends Component {
    
    componentDidMount() {this.props.getProducts()}

    render() {

      if(this.props.products.length > 0) return (
          <div className="page-wrapper">
        {this.props.products.map((el, index) => (
            <div className={"plant-card plant"+index } key={el._id}>
                <img alt={el.name} src={'http://localhost:5000/plants/'+el.image}></img>
            </div>
        )
                  )}
      
    </div>)
      else return <div className="plant"><h3>No plants for swap right now</h3></div>
  }
  
}
  const mapStateToProps = (state) => ({
        products: state.items.products
    })
    
    export default connect(mapStateToProps, { getProducts })(Shop)
