"use client";
import React from "react";

import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Link from "next/link";
import Loader from "@/components/Loader";
import EndPollButton from "@/components/Button/EndPollButton";
import DeletePollButton from "@/components/Button/DeletePollButton";
import { motion } from "framer-motion";
function Polls() {
  const address = useAddress();
  const { contract } = useContract(
    "0x4E68c1b239a351527024C89CD5C0822885A0620B"
  );
  const { data, isLoading: loadingUserPoll } = useContractRead(
    contract,
    "getUserPolls",
    [],
    { from: address }
  );

  return (
    <>
      <section className="container mx-auto px-6">
        {loadingUserPoll ? (
          <Loader />
        ) : (
          <div className="">
            {data.length === 0 ? (
              <div className="my-8 flex flex-col justify-center items-center h-full ">
                {/* <Image
                  className="w-auto  h-40 m-6"
                  src={empty}
                  alt="big-idea"
                ></Image> */}
                <motion.div
                  transition={{ duration: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="uppercase text-center text-xl font-semibold"
                >
                  You currently do not have any polls
                </motion.div>
                <div>
                  <div className="w-fit mx-auto flex gap-6 mt-6">
                    <motion.button
                      transition={{ duration: 0.5, delay: 0.5 }}
                      initial={{ opacity: 0, translateX: -60 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      className="px-5 py-1 w-fit rounded-full bg-white text-black font-semibold"
                    >
                      <Link href="/create-poll">Create Poll</Link>
                    </motion.button>
                    <motion.button
                      transition={{ duration: 0.5, delay: 0.5 }}
                      initial={{ opacity: 0, translateX: +60 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      className="px-5 py-1 w-fit rounded-full bg-white text-black font-semibold"
                    >
                      <Link className="px-5 py-1" href="/vote">
                        Vote
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-6">
                {data.map((poll, index) => (
                  <motion.div
                    transition={{ duration: 0.3, delay: 0.3 * index }}
                    initial={{ opacity: 0, translateY: +60 }}
                    animate={{ opacity: 1, translate: 0 }}
                    key={index}
                    className="border p-2  rounded-md flex justify-between"
                  >
                    <span>{`ID : ${poll}`}</span>
                    <Link href={`poll/${poll}`}>View Poll</Link>
                    <DeletePollButton Poll_ID={poll} index={index} />
                    <EndPollButton Poll_ID={poll} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default Polls;

// "use client";
// import React from "react";
// import {
//   useAddress,
//   useContract,
//   useContractRead,
//   useContractWrite,
// } from "@thirdweb-dev/react";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import Loader from "@/components/Loader";
// function Polls() {
//   const address = useAddress();
//   const { contract } = useContract(
//     "0x8245F0413dC75aAe23FE36fb2a328AD228F09296"
//   );
//   const { data, isLoading: loadingUserPoll } = useContractRead(
//     contract,
//     "getUserPolls",
//     [],
//     { from: address }
//   );

//   return (
//     <>
//       <Navbar />
//       <section className="container mx-auto px-6">
//         {loadingUserPoll ? (
//           <Loader />
//         ) : (
//           <div>
//             {data.length === 0 ? (
//               <span>You currently do not have any polls</span>
//             ) : (
//               <div className="flex flex-col gap-4 mt-6">
//                 {data.map((poll, index) => (
//                   <div
//                     key={index}
//                     className="border p-2  rounded-md flex justify-between"
//                   >
//                     <span>{index + 1}.</span>
//                     <span>{`ID : ${poll.toNumber()}`}</span>
//                     <Link href={`poll/${poll.toNumber()}`}>View Poll</Link>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }

// export default Polls;
