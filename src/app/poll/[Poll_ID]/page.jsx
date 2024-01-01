"use client";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Page({ params }) {
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const {
    data: poll,
    isLoading,
    error,
  } = useContractRead(contract, "getSinglePoll", [params.Poll_ID]);

  // if(!isLoading && error ) {

  // }
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-6 mt-6">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error ? (
              <div className="text-center text-red-500 text-4xl font-semibold">
                {error.reason}
              </div>
            ) : (
              <main>
                <div>
                  <span>ID</span> <span> : </span>
                  <span> {poll[6]}</span>
                </div>
                <div>
                  <span>PUBLIC ACCESS</span>
                  <span> : </span>

                  <span>{poll?.[1].toString()}</span>
                </div>
                <div>
                  <span>POLL ENDED</span>
                  <span> : </span>

                  <span>{poll?.[0].toString()}</span>
                </div>
                <div>
                  <span>CREATOR</span>
                  <span> : </span>

                  <span>{poll?.[2].toString()}</span>
                </div>
                <div>
                  <span>QUESTION</span>
                  <span> : </span>

                  <span>{poll?.[3]}</span>
                </div>

                <div>
                  {poll[4].map((option, index) => (
                    <div key={index}>
                      {option} {poll[5][index].toNumber()}
                    </div>
                  ))}
                </div>
              </main>
            )}
          </>
        )}
      </section>
    </>
  );
}

{
  /* Creator
: 
"0x8816Fa30064cEf7E532E6597C0F4B0adAACF0401"
Id
: 
BigNumber {_hex: '0x01', _isBigNumber: true}
ended
: 
false
options
: 
(3) ['Royal Prince', 'Plato', 'Faji']
public__access
: 
true
question
: 
"\"Select your President\""
whiteList
: 
[] */
}
