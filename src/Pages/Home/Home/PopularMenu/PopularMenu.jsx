import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 my-3 text-2xl">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
