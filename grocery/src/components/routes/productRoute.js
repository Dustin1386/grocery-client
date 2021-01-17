import React from 'react'
import Product from '../product/product'

//instantiates the component for the product page
class ProductRoute extends Product {
    render() {
    return (
      <section>
        <Product />
      </section>
    );
  }
}

export default ProductRoute