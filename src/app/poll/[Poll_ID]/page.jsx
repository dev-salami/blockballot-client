"use client";
import AddMoreAddressToWhiteList from "@/components/AddMoreAddressToWhiteList";
import Loader from "@/components/Loader";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useState } from "react";

export default function Page({ params }) {
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const {
    data: poll,
    isLoading,
    error,
  } = useContractRead(contract, "getSinglePoll", [params.Poll_ID]);

  const [showInput, setShowInput] = useState(false);
  const [whiteList, setWhiteList] = useState([""]);

  return (
    <>
      <section className="container mx-auto px-6 mt-6">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <div className="text-center text-red-500 text-4xl font-semibold p-4">
                {error.reason}
              </div>
            ) : (
              <main className="border max-w-2xl rounded-xl mx-auto ">
                <div className="p-4">
                  <div>
                    <span>POLL ID</span> <span> : </span>
                    <span> {poll[6]}</span>
                  </div>
                  <div>
                    <span>PUBLIC ACCESS</span>
                    <span> : </span>

                    <span className="uppercase">{poll?.[1].toString()}</span>
                  </div>
                  <div>
                    <span>POLL ENDED</span>
                    <span> : </span>

                    <span className="uppercase">{poll?.[0].toString()}</span>
                  </div>
                  <div>
                    <span>CREATOR</span>
                    <span> : </span>

                    <span>{poll?.[2].toString()}</span>
                  </div>
                  <div>
                    {poll?.[1].toString() !== "false" && (
                      <button className="uppercase text-sm">
                        Add more addresses to whiteList
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <hr />
                  <div>
                    {poll?.[1].toString() !== "false" && (
                      <button
                        onClick={() => setShowInput(true)}
                        className="uppercase text-sm px-4 py-2 bg-gray-900 w-full"
                      >
                        Add more addresses to whiteList
                      </button>
                    )}
                  </div>
                  <hr />
                  <div className="px-4 py-2 text-center">{poll?.[3]}</div>
                  {poll[4].map((option, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-3 justify-center"
                    >
                      <div className="border-t py-2 px-4 flex justify-between">
                        <span>{option}</span>
                        <span>{poll[5][index].toNumber()} Votes</span>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            )}
          </>
        )}

        {showInput && (
          <AddMoreAddressToWhiteList
            setShowInout={setShowInput}
            setAddress={setWhiteList}
            address={whiteList}
          />
        )}
      </section>
    </>
  );
}
