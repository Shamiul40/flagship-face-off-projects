import React, { useState } from "react";
import BannerImage from "../../assets/banner.png";
import { Link } from "react-router";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <img className="max-w-2/4 mx-auto" src={BannerImage} alt="" />
      <div>
        <h1 className="text-7xl font-thin text-center my-6">
          Browse, Search, View, Buy
        </h1>
        <p className="text-center my-4">
          Best place to browse, search, view details and purchase of top
          flagship phones <br />
          of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, searchText);
            setSearchText("");
          }}
          className=" w-full mx-auto text-center my-6"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-2/5 rounded-lg mx-auto border shadow-sm focus:outline-none focus:outline-shadow p-2 mr-6 h-10 "
            type="text"
            placeholder="Search Phone By name"
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
