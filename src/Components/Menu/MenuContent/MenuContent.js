import "./MenuContent.scss";
import MenuList from "../MenuList/MenuList";

const MenuContent = props => {
  const isOpened = props.isOpened;

  if (isOpened) {
    return (
      <div className="Menu-content">
        <div className="Menu-content-container">
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
