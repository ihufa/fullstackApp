import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getSwaps } from '../../state/actions/swapActions'
import { Link } from 'react-router-dom'

const Swaps = props => {

    useEffect(() => {
        props.getSwaps(props.userData.userId)
    }, [])

    return (
        <div className="profile-swaps-container">
            <div className="swap-inbox">
                <h2>Inbox</h2>
                {props.swaps && props.swaps.length > 0 ?
                    props.swaps.map((el, index) =>
                        <div key={el._id} className="swap-item">
                            <img
                                className="swap-inbox-img"
                                alt={el.plantType}
                                src={"http://localhost:5000/plants/" + el.plant} />
                            <div className="swap-inbox-text"><span className="swap-inbox-sender">{el.requesterName}:</span> <span className="swap-inbox-message">{el.message}</span>
                                <div className="swap-inbox-buttons">
                                    <Link to={`/users/${el.requesterId}`}><button className="swap-inbox-see-plants-button">See my plants</button></Link>
                                    <button className="swap-inbox-yes-button">Yes</button>
                                    <button className="swap-inbox-no-button">No thanks</button>
                                </div></div>

                        </div>
                    )
                    : null}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.items.products,
    userData: state.items.userData,
    swaps: state.swaps.swaps
})
export default connect(mapStateToProps, { getSwaps })(Swaps)