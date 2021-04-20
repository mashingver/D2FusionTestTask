import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "./CataloguePage.scss";

import ProductsList from "../../ProductsList/ProductsList";
import { categoryArray, coffeeMachines } from "../../../appData";

const CataloguePage = () => {
  let productGroupsArray;
  let productsInitialArray;

  categoryArray.forEach(item => {
    if (item.categoryType === "products") {
      productGroupsArray = item.categoryList;
    }
  });

  return (
    <section className="page">
      <div className="page-container">
        <div className="CataloguePage-links">
          {productGroupsArray.map((item, index) => {
            return (
              <Link
                to={item.linkPath}
                key={`${item.label}-${index}`}
                className="CataloguePage-link"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Switch>
          {productGroupsArray.map((item, index) => {
            productsInitialArray =
              item.label === "Автоматические кофемашины" ? coffeeMachines : [];

            return (
              <Route path={item.linkPath} key={`${item.label}${index}`}>
                <ProductsList
                  label={item.label}
                  productsArray={productsInitialArray}
                />
              </Route>
            );
          })}
        </Switch>
      </div>
    </section>
  );
};

export default CataloguePage;
