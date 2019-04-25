import React, { useState, useEffect, useReducer } from "react"
import { connect } from "react-redux"
import { getProducts, productSearch } from "../state/actions/productsActions"
import { openModal } from "../state/actions/modalActions"
import { ZIPS } from "../zips"

const Gallery = props => {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("suggested")

  let incrementer =
    Math.ceil(((window.innerWidth / 270) * (window.innerHeight / 270)) / 4) * 4
  const [count, dispatch] = useReducer((state, action) => {
    //the picture # reached by scrolling and loading more pictures
    if (action === "inc") {
      console.log("incrementing")
      return state + incrementer
    } else if (action === "null") {
      return 0
    } else if (action === "firstSearch") {
      return incrementer
    }
  }, 0)

  let city = ZIPS.filter(el => el.zip === props.userData.userZip)[0]
  let coords = { long: city.long, lat: city.lat }

  useEffect(() => {
    getOneRoundOfProducts()
  }, [sort])

  useEffect(() => {
    window.addEventListener("scroll", loadOnScroll, true)
    return () => {
      window.removeEventListener("scroll", loadOnScroll, true)
    }
  })

  const loadOnScroll = () => {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    var offsetHeight = document.body.offsetHeight
    var clientHeight = document.documentElement.clientHeight
    if (offsetHeight <= scrollTop + clientHeight) {
      getOneRoundOfProducts(coords)
    }
  }
  const getOneRoundOfProducts = () => {
    if (!search) {
      props.getProducts({
        count: [count, incrementer],
        location: coords,
        sort: sort
      })
      dispatch("inc")
    } else if (search) {
      props.productSearch({
        searchParam: search,
        count: [count, incrementer],
        location: coords,
        sort: sort
      })
      dispatch("inc")
    }
  }

  const swapHandler = e => {
    let id = e.target.id
    let plant = props.products.filter(el => el._id === id)

    props.openModal({
      type: "plantInfo",
      userId: plant[0].userId,
      productId: plant[0]._id,
      image: plant[0].image,
      plantType: plant[0].name,
      description: plant[0].message,
      userName: plant[0].userName,
      userCity: plant[0].userCity,
      time: plant[0].time,
      free: plant[0].free,
      sapling: plant[0].sapling
    })
  }
  const onSearchChange = e => {
    setSearch(e.target.value)
  }
  const searchFire = e => {
    e.preventDefault()
    console.log(search)
    props.productSearch({
      searchParam: search,
      count: [0, incrementer],
      location: coords,
      sort: sort
    })
    dispatch("firstSearch")
    setSearch("")
  }
  const onSortChange = e => {
    setSort(e.target.id)
    dispatch("null")
  }

  const timeConvert = millisec => {
    var seconds = (millisec / 1000).toFixed(0)

    var minutes = (millisec / (1000 * 60)).toFixed(0)

    var hours = (millisec / (1000 * 60 * 60)).toFixed(0)

    var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0)

    if (seconds < 60) {
      return seconds + " Sec"
    } else if (minutes < 60) {
      return minutes + " Min"
    } else if (hours < 24) {
      return hours + " Timer"
    } else {
      return days + " Dage"
    }
  }

  const plantGrid =
    props.products && props.products.length > 0 ? (
      <div className="plant-gallery-page-wrapper">
        <div className="plant-grid">
          {props.products.map((el, index) => (
            <div className="plant-card" key={el._id}>
              <img
                className={"plant-img plantImg" + index}
                id={"plant" + index}
                alt={el.name}
                src={"http://localhost:5000/plants/" + el.image}
              />
              <button
                id={el._id}
                onClick={swapHandler}
                className={"plant request-button plant" + index}>
                Swap
              </button>
              <div className="plant-grid-name">
                <p>{el.userCity}</p>
              </div>
              <div className="plant-grid-city">
                <p>{timeConvert(Date.now() - el.time)} siden</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="plant">
        <h3>You have no active plants at the moment</h3>
      </div>
    )

  return (
    <div>
      <div className="location-and-search-bar">
        <div className="location-search">
          <div className="location-option">
            <h3>Show</h3>
          </div>
          <div className="location-option">
            <input onChange={onSortChange} type="radio" name="sort" id="time" />
            <span>Latest</span>
          </div>
          <div className="location-option">
            <input
              onChange={onSortChange}
              type="radio"
              name="sort"
              id="distance"
            />
            <span>Closest</span>
          </div>
          <div className="location-option">
            <input
              onChange={onSortChange}
              type="radio"
              name="sort"
              id="suggested"
            />
            <span>Suggested</span>
          </div>
        </div>

        <div className="string-search">
          <div className="nav-item search-container">
            <div className="searchbox">
              <form onSubmit={searchFire}>
                <input
                  onChange={onSearchChange}
                  type="search"
                  className="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {plantGrid}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.items.products,
  userData: state.items.userData
})

export default connect(
  mapStateToProps,
  { getProducts, productSearch, openModal }
)(Gallery)
