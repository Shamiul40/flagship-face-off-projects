import React, { useEffect, useState } from "react";
import { getFavorites, removeFavourite } from "../../Utility/Utility";
import PhoneCard from "../../Components/PhoneCard/PhoneCard";
import EmptyState from "../../Components/UI/EmptyState";

const Favourite = () => {
  const [dispaly, setDisplay] = useState([]);

  useEffect(() => {
    const savedPhones = getFavorites();
    setDisplay(savedPhones);
  }, []);

  const handleDelete = (id) => {
    removeFavourite(id);
    setDisplay(getFavorites());
  };

  if (dispaly.length < 1) return <EmptyState></EmptyState>;

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dispaly.map((phone) => (
          <PhoneCard
            phone={phone}
            key={phone.id}
            deleteAble={true}
            handleDelete={handleDelete}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
