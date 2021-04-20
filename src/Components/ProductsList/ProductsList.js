import "./ProductList.scss";
import ProductsListItem from "./ProductsListItem/ProductsListItem";

const ProductsList = props => {
  return (
    <div className="ProductsList">
      <h2 className="ProductsList-heading">{props.label}</h2>
      <div className="ProductsList-list">
        {props.productsArray.map((product, index) => {
          return (
            <ProductsListItem
              product={product}
              key={`${product.productName}-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
