import React from 'react'
import { formatPrice } from '../helpers'

class Order extends React.Component {
  render() {
    const orderKeyAmountMap = Object.entries(this.props.order)
    const fishes = this.props.fishes
    const total = orderKeyAmountMap.reduce((acc, [key, amount]) => {
      const fish = fishes[key]
      const { price } = fish
      const isFishAvailable = fish && fish.status === 'available'
      if (isFishAvailable) {
        return (acc += price * amount)
      } else {
        return acc
      }
    }, 0)
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order
