import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed my-10 py-6 ">
      <SectionTitle
        heading={"Check It Out"}
        subHeading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex w-full justify-center items-center bg-slate-500 opacity-80 py-20 px-40 md:gap-16 text-white ">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="w-1/2 text">
          <p>March 20, 2023</p>
          <p className="uppercase my-2">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            asperiores tempora non necessitatibus eaque dolor maxime vero autem,
            facere sit?
          </p>
          <button className="btn btn-outline border-0 border-b-4 my-3 text-2xl">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
