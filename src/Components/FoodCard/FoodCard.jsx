import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price ,_id} = item;
  
  const {user} = useContext(AuthContext)
  const [,refetch] = useCart();
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleAddToCart = item => {
    console.log(item);
    if(user && user.email){
    const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food item added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: "Please login to order to food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',  {state:{from: location}})
        }
      });
    }
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-black text-white rounded-3xl">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 my-3 text-2xl">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
