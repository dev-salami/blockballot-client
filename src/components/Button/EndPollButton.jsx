"use client";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Loader from "../LoaderSm";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function EndPollButton({ Poll_ID }) {
  const [success, setSuccess] = useState(false);

  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const { mutateAsync: endPoll, isLoading } = useContractWrite(
    contract,
    "endPoll"
  );

  const _endPoll = async () => {
    try {
      const data = await endPoll({ args: [Poll_ID] });
      setSuccess(true);
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
        <button onClick={_endPoll} className="">
          End Poll
        </button>
      )}
    </>
  );
}

export default EndPollButton;
