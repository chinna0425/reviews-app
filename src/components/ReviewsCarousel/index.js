import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {status: 0}

  changeback = () => {
    this.setState(prevstate => {
      if (prevstate.status > 0) {
        return {status: prevstate.status - 1}
      }
      return {status: prevstate.status}
    })
  }

  changenext = () => {
    this.setState(prevstate => {
      if (prevstate.status < 3) {
        return {status: prevstate.status + 1}
      }
      return {status: prevstate.status}
    })
  }

  render() {
    const {status} = this.state
    const {reviewsList} = this.props
    const vals = reviewsList[status]
    const {imgUrl, username, companyName, description} = vals
    return (
      <div className="background-container">
        <h1 className="heading1">Reviews</h1>
        <div className="inner-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.changeback}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div>
            <img src={imgUrl} alt={username} />
            <p className="heading2">{username}</p>
            <p className="spanele">{companyName}</p>
            <p className="paragraph">{description}</p>
          </div>
          <button
            type="button"
            data-testid="rightArrow"
            className="button"
            onClick={this.changenext}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
