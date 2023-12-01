"use client";
import React, { useState } from "react";

import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Loader from "@/components/LoaderSm";
import VoteSuccess from "@/components/VoteSuccess";
function Vote({ params }) {
  const { contract } = useContract(
    "0x8245F0413dC75aAe23FE36fb2a328AD228F09296"
  );
  const [optionIndex, setOptionIndex] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorDet, seterror] = useState("");

  //   const VoteCand = async (index) => {
  //     try {
  //       const data = await usePoll({ args: [params.Poll_ID, index] });
  //       console.info("contract call successs", data);
  //     } catch (err) {
  //       console.error("contract call failure", err);
  //     }
  //   };
  const { mutateAsync: usePoll, isLoading } = useContractWrite(
    contract,
    "usePoll"
  );

  const VoteOption = async (index) => {
    try {
      const data = await usePoll({ args: [params.Poll_ID, index] });
      setSuccess(true);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
      seterror(JSON.stringify(err));
      console.log(err.reason);
    }
  };

  const {
    data: poll,
    isLoading: isLoadingPoll,
    error,
  } = useContractRead(contract, "getSinglePoll", [params.Poll_ID]);

  return (
    <>
      <Navbar />
      {isLoadingPoll ? (
        <Loader />
      ) : (
        <main className="text-sm mt-8 md:text-base max-w-lg mx-auto p-6 text-center border-2 rounded-xl">
          <div>
            <span>POLL ID</span> <span> : </span>
            <span> {poll[2].toNumber()}</span>
          </div>
          {/* <div>
            <span>PUBLIC ACCESS</span>
            <span> : </span>

            <span>{poll?.[1].toString()}</span>
          </div> */}

          <div>
            <span>CREATOR</span>
            <span> : </span>

            <span>{poll?.[4].toString()}</span>
          </div>
          <div>
            <span>{poll?.[5]}</span>
          </div>

          <div className="flex flex-col mt-4 items-center gap-4">
            {poll[6].map((option, index) => (
              <button
                // disabled={true}
                disabled={poll?.[0].toString() === "true" ? true : false}
                className={`border w-full  disabled:border-red-500 rounded-md px-6 py-1 ${
                  optionIndex === index && "border-green-500"
                }`}
                onClick={() => {
                  VoteOption(index);
                  setOptionIndex(index);
                }}
                key={index}
              >
                {option}
              </button>
            ))}
          </div>
          {isLoading && <Loader />}
          {success && <VoteSuccess />}
          {poll?.[1].toString() === "false" && (
            <div className="mt-2">
              NOTE : This poll is not publicly available ensure you have right
              to vote or contact the poll admin
            </div>
          )}

          {error && <div className="text-red-500">{errorDet}</div>}
        </main>
      )}
    </>
  );
}

export default Vote;
