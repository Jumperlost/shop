import React, { Component } from "react";

export class category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "Living Room",
          name: "Living Room",
        },
        {
          key: "Dining Room",
          name: "Dining Room",
        },
        {
          key: "Home Decor",
          name: "Home Decor",
        },
        {
          key: "Office",
          name: "Office",
        },
      ],
    };
  }
  render() {
    return (
      <div className="category">
        {this.state.category.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default category;

//rce
