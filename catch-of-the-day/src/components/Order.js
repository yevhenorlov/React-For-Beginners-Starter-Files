import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func
  }
  renderOrder = key => {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const isFishAvailable = fish && fish.status === 'available'
    if (!fish) return null
    if (!isFishAvailable) {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer available.
          <button onClick={() => this.props.removeFromOrder(key)}>
            &times;
          </button>
        </li>
      )
    } else {
      return (
        <li key={key}>
          {count} lbs {fish.name} {formatPrice(fish.price)}
          <button onClick={() => this.props.removeFromOrder(key)}>
            &times;
          </button>
        </li>
      )
    }
  }
  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((acc, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isFishAvailable = fish && fish.status === 'available'
      if (isFishAvailable) {
        return (acc += fish.price * count)
      } else {
        return acc
      }
    }, 0)
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order
