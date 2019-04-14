import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProductsByUserId } from '../../state/actions/productsActions';

const Userplants = props => {
    useEffect(() => {
        props.getProductsByUserId(props.location.pathname.split("/")[2])
    }, [])
    return (
        <div className="browsed-user-plants">
            {props.browsedUserProducts && props.browsedUserProducts.length > 0 && props.browsedUserProducts.map((el, index) => (
                <div className="plant-card" key={el._id}>
                    <img
                        className={"plant-img plantImg" + index}
                        id={"plant" + index}
                        alt={el.name}
                        src={"http://localhost:5000/plants/" + el.image}
                    />
                    <div className="plant-grid-name">
                        <p>{el.name}</p>
                    </div>
                    <div className="plant-grid-city">
                        <p>{el.userCity}</p>
                    </div>
                </div>
            ))}
        </div>)
}

const mapStateToProps = state => ({
    browsedUserProducts: state.items.browsedUserProducts
})

export default connect(mapStateToProps, { getProductsByUserId })(Userplants)