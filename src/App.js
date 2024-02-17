import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Luca Sofa",
          img: "sofa.jpg",
          desc: "The Luca collection exudes a casual laidback style. Its generous scale, track arm, and pillow back are combined with a super plush seat for a look and level of comfort that can't be beat. Available as a sofa with or without reversible ottoman chaise as well as a chair and a half, swivel chair, and matching ottoman.",
          category: "Living Room",
          price: "145.99",
        },
        {
          id: 2,
          title: "Modern Coffee Table",
          img: "coffeeTable.jpg",
          desc: "Add a touch of contemporary style to your living room with this modern coffee table. Featuring clean lines and a minimalist design, this table is perfect for any modern home decor. It's also durable and functional, making it ideal for everyday use.",
          category: "Living Room",
          price: "89.99",
        },
        {
          id: 3,
          title: "Vintage Armchair",
          img: "VintageArmchair.jpg",
          desc: "Bring a touch of vintage charm to your home with this elegant armchair. With its classic design and rich upholstery, this chair is sure to add warmth and character to any room. Whether you place it in your living room, bedroom, or home office, it will instantly become a favorite spot for relaxing and unwinding after a long day.",
          category: "Living Room",
          price: "199.99",
        },
        {
          id: 4,
          title: "Rustic Dining Table",
          img: "RusticTable.jpg",
          desc: "Gather your family and friends around this rustic dining table for memorable meals and lively conversations. Made from solid wood with a distressed finish, this table has a warm and inviting look that will complement any dining room decor. Its sturdy construction ensures years of enjoyment, while its spacious surface provides plenty of room for plates, platters, and serving dishes.",
          category: "Dining Room",
          price: "299.99",
        },
        {
          id: 5,
          title: "Cozy Throw Blanket",
          img: "CozyBlanket.jpg",
          desc: "Stay warm and cozy on chilly nights with this soft and luxurious throw blanket. Made from plush fabric, this blanket is perfect for snuggling up on the couch with a good book or movie. Its generous size makes it ideal for sharing, while its stylish design adds a touch of elegance to any room.",
          category: "Home Decor",
          price: "39.99",
        },
        {
          id: 6,
          title: "Elegant Floor Lamp",
          img: "ElegantFloorLamp.jpg",
          desc: "Illuminate your home in style with this elegant floor lamp. Featuring a sleek metal base and a fabric drum shade, this lamp adds a touch of sophistication to any room. Its adjustable height and 360-degree swivel head make it easy to direct light exactly where you need it, while its timeless design complements a wide range of decor styles.",
          category: "Home Decor",
          price: "79.99",
        },
        {
          id: 7,
          title: "Soft Plush Rug",
          img: "SoftPlushRug.jpg",
          desc: "Add warmth and comfort to your home with this soft plush rug. Made from high-quality materials, this rug is luxuriously soft underfoot and provides a cozy surface for lounging and relaxing. Its neutral color and subtle pattern make it easy to incorporate into any room, while its durable construction ensures long-lasting beauty and performance.",
          category: "Home Decor",
          price: "129.99",
        },
        {
          id: 8,
          title: "Stylish Wall Mirror",
          img: "StylishWallMirror.jpg",
          desc: "Enhance the look of any room with this stylish wall mirror. Featuring a sleek metal frame and a beveled edge, this mirror adds a touch of elegance to any space. Whether you hang it in your entryway, living room, bedroom, or bathroom, it will instantly brighten up the room and make it feel more spacious.",
          category: "Home Decor",
          price: "59.99",
        },
        {
          id: 9,
          title: "Classic Desk Lamp",
          img: "ClassicDeskLamp.jpg",
          desc: "Illuminate your workspace with this classic desk lamp. Featuring a timeless design and a sturdy metal base, this lamp is perfect for reading, studying, or working late into the night. Its adjustable arm and swivel head make it easy to direct light exactly where you need it, while its compact size allows it to fit seamlessly on any desk or tabletop.",
          category: "Office",
          price: "49.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
