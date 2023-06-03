const FoodCard = ({ item }) => {
  const { image, name, price } = item;
  const handleAddToCart = item => {
    console.log(item);
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
