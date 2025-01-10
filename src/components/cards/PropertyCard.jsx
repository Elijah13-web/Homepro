import React, { useState } from "react";
import ngnIcon from "../../assets/icons/CurrencyNgn.png";
import heartOutlined from "../../assets/icons/Heart.png"; // Default outlined heart icon
import heartFilled from "../../assets/icons/images.png"; // Filled heart icon
import bedIcon from "../../assets/icons/Bed.png";
import bathIcon from "../../assets/icons/Bathtub.png";
import tdesign from "../../assets/icons/tdesign_measurement-2.png";
import { Link } from "react-router-dom";

const PropertyCard = ({ _id, title, image, price, bed, bath, size }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the heart icon
    setLiked(!liked);
  };

  return (
    <Link to={`/property/${_id}`}>
      <div className="bg-slate-50 rounded-xl max-w-[400px] h-[396px] hover:border" key={_id}>
        <div className="rounded-lg p-6 max-w-[400px]">
          <img src={image} alt={title} className="w-[325px] h-[245px] rounded-[15px]" />
          <div className="flex text-[#1F1F1F] text-2xl font-Avenir LT Std w-[154px] justify-between my-1">
            <img src={ngnIcon} alt="ngnIcon" className="w-[29px]" />
            <span>{price.toLocaleString("en-us")}</span>
            <img
              src={liked ? heartFilled : heartOutlined} // Toggle between outlined and filled heart
              alt="heart"
              className="flex w-[24px] h-[24px] mx-36 my-2 cursor-pointer"
              onClick={toggleLike}
            />
          </div>
          <div className="text-[#1F1F1F] font-semibold h-5 w-[325px] font-Avenir LT Std text-xl">
            <h3>{title}</h3>
          </div>
          <div className="flex text-[#1F1F1F] my-4">
            <div className="text-[#1F1F1F] my-3 gap-[6px] flex">
              <img src={bedIcon} alt="bed" className="w-[24px] h-[24px] mx-1" />
              <span>{bed} bed</span>
            </div>
            <div className="text-[#1F1F1F] flex my-3 px-6">
              <img src={bathIcon} alt="bath" className="w-[24px] h-[24px] px-2" />
              <span>{bath} bath</span>
            </div>
            <div className="text-[#1F1F1F] flex font-Avenir LT Std h-[25px] my-3">
              <img src={tdesign} alt="tdesign" className="w-[24px] h-[24px]" />
              <span>{size} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
