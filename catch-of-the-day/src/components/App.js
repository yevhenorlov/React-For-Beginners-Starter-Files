import React from 'react'
import base from '../base'
import Header from './Header'
import Fish from './Fish'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  componentDidMount() {
    const { params } = this.props.match
    const localStorageRef = localStorage.getItem(`${params.storeId}_order`)
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate() {
    const { params } = this.props.match
    localStorage.setItem(
      `${params.storeId}_order`,
      JSON.stringify(this.state.order)
    )
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[`fish${Date.now()}`] = fish
    this.setState({ fishes })
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }
  addToOrder = key => {
    const order = { ...this.state.order }
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Your seafood market" />
          <ul className="fishes">
            {Object.entries(this.state.fishes).map(([key, fish]) => (
              <Fish
                key={key}
                index={key}
                details={fish}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
