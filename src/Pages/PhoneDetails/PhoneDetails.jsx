import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "../../Components/UI/Button";
import { addFavourite, addToCart, getCart } from "../../Utility/Utility.js";
import { CartContext } from "../../Providers/Context.jsx";

const PhoneDetails = () => {
  const {setCart} = useContext(CartContext)
  const data = useLoaderData();

  const { id } = useParams();

  const singlePhone = data.find((phone) => phone.id === parseInt(id));

  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone;

  const handleFavourite=()=>{
    addFavourite(singlePhone)
  }

  const handleCart =()=>{
    addToCart(singlePhone)
    setCart(getCart())
  }


  return (
    <div className="w-10/12 mx-auto py-12">
      <img className="w-auto mx-auto" src={image} alt="" />
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-3xl ">{name}</h1>
        <div>
          <Button onClick={handleCart}  type="submit" label={<MdAddShoppingCart />}></Button>
          <Button onClick={handleFavourite} type="submit" label={<BsFillBookmarkPlusFill />}></Button>
          
          
        </div>
      </div>
      <div>
      <div className='space-y-4'>
        <h2 className='font-thin text-4xl'>Details: </h2>
        <p>
          <span className='font-bold'>Brand:</span> {brand}
        </p>
        <p>
          <span className='font-bold'>Model:</span> {model}
        </p>
        {/* Storage Info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Storage:</p>
          <div>
            {storage.map(item => {
              return (
                <div key={item}>
                  <div>{item}</div>
                </div>
              )
            })}
          </div>
        </div>
        {/* Price info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Price:</p>
          <div>
            {Object.entries(price).map(([storage, price]) => (
              <p key={storage} className=''>
                <span>{storage}:</span> <span>{price}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className='font-bold'>Camera Info:</span> {camera_info}
        </p>
        <p>
          <span className='font-bold'>Description:</span> {description}
        </p>
      </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
