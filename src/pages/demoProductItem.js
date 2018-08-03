import React, { Component } from "react";
import PropTypes from 'prop-types';
import { products } from "../utils/dummyData.js";
import _ from "lodash"
import Link from 'gatsby-link'
import './demo-products.scss';
import DemoProductFaqs from "../components/DemoProductFaqs.js";
import DemoProductSubscription from "../components/DemoProductSubscription.js";
import DemoProductVariants from "../components/DemoProductVariants.js";



class DemoProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      itemCount: 7
    }
  }

  changeItemCount = (change) => {
    if (!(this.state.itemCount === 0 && change < 0)) {
      this.setState(prevState => ({
        itemCount: prevState.itemCount + change
      }))
    }
  }

  addItemToCart = () => {
    let currentCartItems = localStorage.getItem('demo-cart') ? JSON.parse(localStorage.getItem('demo-cart')) : {};
    if (currentCartItems[this.props.pathContext.productId]) {
      currentCartItems[this.props.pathContext.productId].purchaseQuantity += this.state.itemCount
    } else {
      currentCartItems[this.props.pathContext.productId] = this.props.product;
      currentCartItems[this.props.pathContext.productId].purchaseQuantity = this.state.itemCount
    }
    localStorage.setItem('demo-cart', JSON.stringify(currentCartItems));
    console.log(JSON.parse(localStorage.getItem('demo-cart')))
  }

  renderVariants = () => (
    _.map(this.props.pathContext.variants, (variant, index) => (
      <DemoProductVariants key={index} variantItems={variant.selectedOptions} />
    ))
  )

  renderProductActions = () => (
    <div className="demo-product-actions">
      <div id="action-input">
        <div id="quantity">
          <button onClick={() => this.changeItemCount(-7)} className="btn btn-light minus-btn">
            <i className="fas fa-minus"></i>
          </button>
          <input type="text" disabled min="0" value={this.state.itemCount} />
          <button onClick={() => this.changeItemCount(7)} className="btn btn-light plus-btn">
            <i className="fas fa-plus" ></i>
          </button>
        </div>
        <span id="price">Rs. {(this.props.pathContext.productPrice / 7.0) * ((this.state.itemCount === 0) ? 7 : this.state.itemCount)}</span>
      </div>
      <div id="action-button">
        <button className="btn btn-dark" onClick={this.addItemToCart} disabled={!this.state.itemCount}>add to cart</button>
        <button className="btn btn-dark">buy now</button>
      </div>
    </div>
  )

  renderSocialIcons = () => (
    <div id="social-icons">
      <ul>
        <li>
          <Link to="/demoProductItem">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link to="/demoProductItem">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
      </ul>
    </div>
  )

  renderTags = () => (
    <div className="demo-product-tags">
      <ul>
        {
          _.map(this.props.pathContext.tags, (tag, index) => (
            <li key={index} >
              <Link to="/demoProductItem" activeClassName="active-item">{tag}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )

  //Description will get replaced by props
  renderDescription = () => (
    <div className="demo-product-description">
      <div className="title">
        <span>Description</span>
      </div>
      <div className="demo-product-details">
        {this.props.pathContext.description}
      </div>
    </div>
  )

  render() {
    return (
      <div className="container">
        <div className="demo-product-item row">
          <div className="demo-product-item-image col-md-6 col-sm-12">
            <img src={this.props.pathContext.image} alt={this.props.pathContext.productName} />
          </div>
          <div className="demo-product-item-details col-md-6 col-sm-12" >
            <h1 id="demo-product-title">{this.props.pathContext.productName}</h1>
            {this.renderVariants()}
            {this.renderProductActions()}
            {this.renderSocialIcons()}
            <span id="behind-science">
              <i className="fas fa-download"></i>
              Read the science behind the program
            </span>
            {this.renderTags()}
          </div>
        </div>
        <div className="container">
          {this.renderDescription()}
        </div>
        <div className="container">
          <DemoProductSubscription />
        </div>
        <div className="container">
          <DemoProductFaqs faqs={this.props.pathContext.faqs} />
        </div>
      </div>
    )
  }
}

export default DemoProductItem
