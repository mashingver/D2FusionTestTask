import MenuListItem from "../MenuListItem/MenuListItem";
import "./MenuList.scss";

const MenuList = props => {
  return (
    <div className="MenuList">
      <span className="MenuList-label">{props.item.categoryLabel}</span>
      <ul className="MenuList-list">
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
