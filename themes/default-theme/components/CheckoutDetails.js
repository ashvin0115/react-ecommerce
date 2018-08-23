import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Container, Flex, Box } from 'rebass';

class CheckoutDetails extends Component {
  render() {
    const { cartDetails } = this.props;
    let itemCount = 0;
    let totalPrice = 0;
    if (cartDetails) {
      Object.keys(cartDetails).forEach((key) => {
        itemCount += 1;
        totalPrice += (cartDetails[key].productPrice / 7.0) * cartDetails[key].purchaseQuantity;
      });
    }

    return (
      <Container p={3} style={{ boxShadow: '1px 1px 4px 1px rgba(158,158,158, 0.5)' }}>
        <Flex flexWrap="wrap">
          <Box width={[1]} py={2}>
            <span>
              {itemCount}
              {' '}
              items
            </span>
            <span style={{ float: 'right' }}>
              {`Rs. ${totalPrice.toFixed(2)}`}
            </span>
          </Box>
          <Box width={[1]} py={2}>
            <span>
              Shipping charges
            </span>
            <span style={{ float: 'right' }}>
              0.00
            </span>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default CheckoutDetails;
