"use client";
import React, { useState } from "react";

import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import Loader from "@/components/LoaderSm";
import VoteSuccess from "@/components/VoteSuccess";
function Vote({ params }) {
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const address = useAddress();

  const [optionIndex, setOptionIndex] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const { mutateAsync: usePoll, isLoading } = useContractWrite(
    contract,
    "usePoll"
  );

  const VoteOption = async (index) => {
    try {
      const data = await usePoll({ args: [params.Poll_ID, index] });
      setSuccess(true);
    } catch (err) {
      setError(err.reason);
      setTimeout(() => {
        setError("");
        setOptionIndex(null);
      }, 4000);
    }
  };

  const {
    data: poll,
    isLoading: isLoadingPoll,
    error: pollError,
  } = useContractRead(contract, "getSinglePoll", [params.Poll_ID]);

  const { data: canParticipate, isLoading: isLoadingCanParticipate } =
    useContractRead(contract, "canParticipate", [params.Poll_ID], {
      from: address,
    });

  const { data: alreadyParticipated, isLoading: isLoadingAlreadyParticipated } =
    useContractRead(contract, "alreadyParticipated", [params.Poll_ID], {
      from: address,
    });

  return (
    <>
      {isLoadingPoll &&
      isLoadingCanParticipate &&
      isLoadingAlreadyParticipated ? (
        <Loader />
      ) : (
        <section>
          {poll ? (
            <main className="text-sm mt-8 md:text-base max-w-lg mx-auto p-6 text-center border-2 rounded-xl">
              <div>
                <span>POLL ID</span> <span> : </span>
                <span> {poll[6]}</span>
              </div>
              {/* <div>
            <span>PUBLIC ACCESS</span>
            <span> : </span>

            <span>{poll?.[1].toString()}</span>
          </div> */}

              <div>
                <span>CREATOR</span>
                <span> : </span>

                <span>{poll?.[2].toString()}</span>
              </div>
              <hr className="my-4" />
              <div>
                <span className="text-green-600 uppercase text-sm font-semibold">
                  {poll?.[3]}
                </span>
              </div>
              <div className="flex flex-col mt-4 items-center gap-4">
                {poll[4].map((option, index) => (
                  <button
                    disabled={canParticipate?.toString() === "false"}
                    // disabled={poll?.[0].toString() === "true" ? true : false}
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
              {canParticipate?.toString() === "false" && (
                <p className="text-red-500 uppercase border rounded-md mt-4 text-sm font-bold p-2">
                  You can not participate in this poll
                </p>
              )}
              {isLoading && <Loader />}
              {success && <VoteSuccess />}
              {poll?.[1].toString() === "false" && (
                <div className="mt-2">
                  NOTE : This poll is not publicly available ensure you have
                  right to vote or contact the poll admin
                </div>
              )}
              {alreadyParticipated?.toString() === "true" && (
                <div className="text-red-500 uppercase border rounded-md mt-4 text-sm font-bold p-2">
                  You have already participated in this poll. Thank you
                </div>
              )}
              {error && (
                <div className="text-red-500 uppercase border rounded-md mt-4 text-sm font-bold p-2">
                  {error}
                </div>
              )}
            </main>
          ) : (
            <div className="text-center text-xl font-semibold uppercase mt-10">
              <span>Poll with id</span>
              <span className="px-2 text-blue-500">{params.Poll_ID}</span>
              <span>does not exist, Ensure the provided Poll ID is valid</span>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default Vote;
