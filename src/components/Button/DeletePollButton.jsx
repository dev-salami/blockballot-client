"use client";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Loader from "../LoaderSm";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function DeletePollButton({ Poll_ID }) {
  const [success, setSuccess] = useState(false);

  const { contract } = useContract(
    "0x8245F0413dC75aAe23FE36fb2a328AD228F09296"
  );
  const { mutateAsync: deletePoll, isLoading } = useContractWrite(
    contract,
    "deletePoll"
  );

  const _deletePoll = async () => {
    try {
      const data = await deletePoll({ args: [Poll_ID] });
      setSuccess(true);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : success ? (
        <div className="flex items-center">
          <IoCheckmarkCircleSharp
            size={25}
            className="bg-green-400 text-white rounded-full"
          />
        </div>
      ) : (
        <button onClick={_deletePoll}>
          <MdDelete />
        </button>
      )}
    </>
  );
}

export default DeletePollButton;
