import "./ProductsListItem.scss";

const ProductsListItem = props => {
  return (
    <div className="ProductsListItem">
      <div className="ProductsListItem-card">
        <div className="ProductsListItem-controls">
          <span className="ProductsListItem-control">
            <span className="ProductsListItem-control-icon favourites" />
            <span className="ProductsListItem-control-text">В избранное</span>
          </span>
          <span className="ProductsListItem-control">
            <span className="ProductsListItem-control-icon compare" />
            <span className="ProductsListItem-control-text">Сравнить</span>
          </span>
        </div>
        <img
          className="ProductsListItem-image"
          src={`${process.env.PUBLIC_URL}/images/${props.product.productImageName}`}
          alt={props.product.productName}
        />
        <div className="ProductsListItem-badges">
          {props.product.productPopular && (
            <span className="ProductsListItem-badge popular" />
          )}
          {props.product.productDiscount && (
            <span className="ProductsListItem-badge discount" />
          )}
          {props.product.productApp && (
            <span className="ProductsListItem-badge app" />
          )}
          {props.product.productGift && (
            <span className="ProductsListItem-badge gift" />
          )}
        </div>
        {props.product.productCollection && (
          <div className="ProductsListItem-collection" />
        )}
      </div>
      <div className="ProductsListItem-footer">
        <span className="ProductsListItem-name">
          {props.product.productName}
        </span>
        <span className="ProductsListItem-discount">
          {props.product.productDiscountAmount}
        </span>
        <span className="ProductsListItem-price">
          {props.product.productPrice}
        </span>
        {props.product.productBonus && (
          <span className="ProductsListItem-bonus">
            {props.product.productBonus}
          </span>
        )}
        <span className="ProductsListItem-action" />
      </div>
    </div>
  );
};

export default ProductsListItem;
