import React, { Component } from "react";

export class showfulliem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <img
            className="show-img"
            src={"./img/" + this.props.item.img}
            alt={this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          ></img>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <p>{this.props.item.category}</p>
          <b>{this.props.item.price}$</b>
          {/* <div
            className="add-to-card"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div> */}
        </div>
      </div>
    );
  }
}

export default showfulliem;
