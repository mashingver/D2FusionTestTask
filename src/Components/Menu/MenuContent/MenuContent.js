import MenuList from "../MenuList/MenuList";
import "./MenuContent.scss";

const MenuContent = props => {
  const isOpened = props.isOpened;

  if (isOpened) {
    return (
      <div className="MenuContent">
        <div className="MenuContent-container">
          {props.menuArray.map(item => {
            return <MenuList item={item} key={item.categoryLabel} />;
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default MenuContent;
