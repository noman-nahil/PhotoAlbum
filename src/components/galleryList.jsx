import React, { useState } from "react";
import image1 from "../images/image-1.webp";
import image2 from "../images/image-2.webp";
import image3 from "../images/image-3.webp";
import image4 from "../images/image-4.webp";
import image5 from "../images/image-5.webp";
import image6 from "../images/image-6.webp";
import image7 from "../images/image-7.webp";
import image8 from "../images/image-8.webp";
import image9 from "../images/image-9.webp";
import image10 from "../images/image-10.jpeg";
import image11 from "../images/image-11.jpeg";

const Pictures = () => {
  const [items, setItems] = useState([
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image5 },
    { id: 5, src: image4 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
  ]);
  const [isHovered, setIsHovered] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleMouseMove = (imageId) => {
    console.log(isHovered);
    setIsHovered(imageId);
  };

  const handleMouseLeave = () => {
    //console.log(isHovered);
    setIsHovered(null);
  };

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
    console.log(selectedItems);
  };

  const isIdSelected = (itemId) => {
    return selectedItems.includes(itemId);
  };

  let galleryList = items.map((item, index) => {
    console.log("tab", index);
    return (
      <div
        className={`relative rounded-lg ${
          isHovered === item.id ? "bg-gray-700" : ""
        }  ${index === 0 ? "row-span-2 col-span-2" : ""}`}
        onMouseEnter={() => handleMouseMove(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="">
          <img
            className={`border-2 rounded-lg border-gray-300  ${
              isHovered === item.id ? "opacity-50" : ""
            } ${isIdSelected(item.id) ? "opacity-50" : ""} `}
            src={item.src}
          />

          {isIdSelected(item.id) && (
            <input
              type="checkbox"
              className="absolute left-5 top-5"
              onChange={() => handleCheckboxChange(item.id)}
              checked={selectedItems.includes(item.id)}
            />
          )}
          {isHovered === item.id && (
            <input
              type="checkbox"
              className="absolute left-5 top-5"
              onChange={() => handleCheckboxChange(item.id)}
              checked={selectedItems.includes(item.id)}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div class="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mx-20">
      {galleryList}
    </div>
  );
};

export default Pictures;