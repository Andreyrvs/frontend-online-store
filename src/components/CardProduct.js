import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class CardProduct extends Component {
  render() {
    const { searchResult: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product" className="product-item-container">
        <p className="product-title">{ title }</p>
        <img className="product-item-img" src={ thumbnail } alt={ title } />
        <span>{`R$:${price}`}</span>
        <Button
          datatest="product-add-to-cart "
          btnName="Adicionar ao Carrinho"
        />
      </section>
    );
  }
}

CardProduct.propTypes = {
  searchResult: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequire;

export default CardProduct;
