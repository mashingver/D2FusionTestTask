import "./MenuList.scss";
import MenuListItem from "../MenuListItem/MenuListItem";

const MenuList = props => {
  return (
    <div className="Menu-list">
      <span className="Menu-list-label">{props.item.categoryLabel}</span>
      <ul className="Menu-list-list">
        {props.item.categoryList.map((categoryListItem, index) => {
          return (
            <MenuListItem
              key={`${props.item.categoryLabel}-${index}`}
              listItem={categoryListItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
