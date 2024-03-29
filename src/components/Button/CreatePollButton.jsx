"use client";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import React, { useState } from "react";
import Loader from "../LoaderSm";
import Successmodal from "../SuccesModal";

function CreatePollButton({ args, isInputValid }) {
  const [success, setSuccess] = useState(false);
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const { mutateAsync: CreatePoll, isLoading } = useContractWrite(
    contract,
    "createPoll"
  );

  const _CreatePoll = async () => {
    try {
      const data = await CreatePoll({
        args: args,
      });
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
      ) : (
        <button
          disabled={!isInputValid || isLoading}
          className="mt-4 bg-black disabled:bg-black/80 text-white w-full font-semibold py-1 px-3 rounded-md"
          onClick={_CreatePoll}
        >
          Create Poll
        </button>
      )}
      {/* <div className="text-red-500 font-semibold uppercase text-center">
        Invalid Input
      </div> */}

      {success && <Successmodal />}
    </>
  );
}

export default CreatePollButton;

// [true, [], "Select your Governor", ["RAY", "KUDI", "DREY"]]
