import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="p-4">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-8 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 my-3 text-2xl">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
