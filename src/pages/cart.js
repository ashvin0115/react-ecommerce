import React from 'react'
import { Circle } from 'react-preloaders';
import ProductList from '../components/presentational/products/ProductList'
import CartContainer from '../components/presentational/CartContainer'
import { getCart, removeFromCart, updateCart  } from '../utils/shopifyUtils';
import '../components/css/cartStyle.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    }
  }

  componentDidMount() {
    this.fetchCartData();
  }

  fetchCartData = () => {
    getCart().then(data => {
      console.log(data);
      this.setState({
        cartItems: data,
      })
    });
  }

  saveCartUpdates = (updatedData) => {
    updateCart(updatedData).then(this.fetchCartData)
    .catch(err => console.log(err));
  }

  render() {
    if (this.state.cartItems.length < 1) {
      return <Circle />
    }
    return (
      <section id="wrapper">
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-xs-12">
              <CartContainer
                cart={this.state.cartItems}
                saveNewCart={this.saveCartUpdates}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
