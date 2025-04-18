import toast from "react-hot-toast";

export const getFavorites = () => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) return JSON.parse(favourites);
  return [];
};

export const addFavourite = (phone) => {
  const favourites = getFavorites();
  const isExist = favourites.find((p) => p.id === phone.id);

  if (isExist) return toast.error("phone already added");
  favourites.push(phone);
  toast.success("phone added successfully !")

  localStorage.setItem("favourites", JSON.stringify(favourites));
};


export const removeFavourite =(id)=>{
  const favourites = getFavorites();
  const remainingFavourites = favourites.filter(phone=>phone.id!==id)
  localStorage.setItem("favourites", JSON.stringify(remainingFavourites));
  toast.success("remove successfully!")
}




// for cart
export const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};


export const addToCart = (phone) => {
  const cart = getCart();
  const isExist = cart.find((p) => p.id === phone.id);

  if (isExist) return toast.error("phone already aded");
  cart.push(phone);
  toast.success("phone added successfully !")

  localStorage.setItem("cart", JSON.stringify(cart));
};


export const removeCart =(id)=>{
  const cart = getCart();
  const remainingCart = cart.filter(phone=>phone.id!==id)
  localStorage.setItem("favourites", JSON.stringify(remainingCart));
}