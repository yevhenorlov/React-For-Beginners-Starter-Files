import React from 'react'
import PropTypes from 'prop-types'

class EditFishForm extends React.Component {
  static propTypes = {
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    index: PropTypes.string,
    fish: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string
    })
  }
  handleChange = e => {
    const newFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    }
    this.props.updateFish(this.props.index, newFish)
  }
  deleteFish = key => {
    console.log(key)
    this.props.deleteFish(key)
  }
  render() {
    const { name, price, status, desc, image } = this.props.fish
    return (
      <form action="" className="fish-edit">
        <input
          name="name"
          ref={this.nameRef}
          onChange={this.handleChange}
          value={name}
        />
        <input
          name="price"
          ref={this.priceRef}
          onChange={this.handleChange}
          value={price}
        />
        <select
          name="status"
          ref={this.statusRef}
          onChange={this.handleChange}
          value={status}
        >
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold Out!
          </option>
        </select>
        <textarea
          name="desc"
          ref={this.descRef}
          onChange={this.handleChange}
          value={desc}
        />
        <input
          name="image"
          ref={this.imageRef}
          onChange={this.handleChange}
          value={image}
        />
        <button type="button" onClick={() => this.deleteFish(this.props.index)}>
          Delete Fish
        </button>
      </form>
    )
  }
}

export default EditFishForm
