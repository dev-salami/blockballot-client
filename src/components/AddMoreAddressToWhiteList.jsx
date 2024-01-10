import React, { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AddMoreAddressToWhiteList = ({ setAddress, address }) => {
  const handleAddAddress = () => {
    setAddress([...address, ""]);
  };

  const handleRemoveAddress = (index) => {
    if (address.length > 1) {
      const newaddress = [...address];
      newaddress.splice(index, 1);
      setAddress(newaddress);
    }
  };

  const handleAddressChange = (index, event) => {
    const newaddress = [...address];
    newaddress[index] = event.target.value;
    setAddress(newaddress);
  };

  return (
    <div className="flex flex-col gap-1 mt-10">
      <label className="pl-2 font-semibold" htmlFor="title">
        WhiteList Address
      </label>
      <div>
        {address.map((data, index) => (
          <div key={index} className="flex gap-4 items-center mb-2">
            <input
              type="text"
              className="border border-black rounded-md py-1 px-2 text-gray-900 w-full"
              placeholder="Enter Address"
              value={data}
              onChange={(e) => handleAddressChange(index, e)}
            />
            <button
              type="button"
              className="px-4 py-2 border bg-black text-white rounded"
              onClick={() => handleRemoveAddress(index)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
        <button
          type="button"
          className=" bg-black border text-white w-full font-semibold py-1 px-3 rounded-md"
          onClick={handleAddAddress}
        >
          Add more address
        </button>
      </div>
    </div>
  );
};

export default AddMoreAddressToWhiteList;
