"use client";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Loader from "./LoaderSm";

const AddMoreAddressToWhiteList = ({
  setAddress,
  address,
  setShowInput,
  Id,
}) => {
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

  const [msg, setMsg] = useState("");
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const { mutateAsync: addAddressToWhiteList, isLoading } = useContractWrite(
    contract,
    "addAddressToWhiteList"
  );

  const addToWhiteList = async () => {
    try {
      const data = await addAddressToWhiteList({ args: [Id, address] });
      setMsg("success");
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
      setMsg("error");
    }
  };

  return (
    <section className="fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="relative flex flex-col gap-1 mt-10 max-w-2xl w-full border mx-auto bg-gray-900 p-10 rounded-xl">
        <label className="pl-2 font-semibold" htmlFor="title">
          WhiteList Address
        </label>
        <button
          onClick={() => setShowInput(false)}
          className="absolute top-0 right-0"
        >
          ***
        </button>
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
            Add more address field
          </button>
          <button
            onClick={addToWhiteList}
            type="button"
            disabled={isLoading}
            className="uppercase bg-black border text-white w-full font-semibold py-1 px-3 mt-3 flex gap-4 justify-center items-center rounded-md"
          >
            <span>Add Addresses to whitelist</span> {isLoading && <Loader />}
          </button>

          {msg === "success" && (
            <p className="uppercase bg-black border text-green-500 w-full font-semibold py-1 px-3 mt-3  gap-4 text-center rounded-md">
              Address successfully added to whitelist
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddMoreAddressToWhiteList;
