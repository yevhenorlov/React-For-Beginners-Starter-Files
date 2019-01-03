import React from 'react'

class EditFishForm extends React.Component {
  editFish = () => {}
  handleChange = e => {
    console.log(e.currentTarget)
  }
  render() {
    const { name, price, status, desc, image } = this.props.fish
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
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
        <button type="submit">Edit Fish</button>
      </form>
    )
  }
}

export default EditFishForm
