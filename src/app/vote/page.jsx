"use client";
import React, { useState } from "react";

import Link from "next/link";
function ManagePolls() {
  const [poll_ID, setPoll_ID] = useState();

  return (
    <>
      <div className="flex justify-center items-center my-auto">
        <div className="max-w-lg flex items-center justify-center w-full  mx-4 mt-20 gap-4 flex-col p-2 rounded-xl  border">
          <div className="flex flex-col gap-1 w-full">
            {/* <label className="pl-2 font-semibold" htmlFor="title">
              Poll ID
            </label> */}
            <input
              onChange={(e) => setPoll_ID(e.target.value)}
              value={poll_ID}
              className="border  border-black rounded-md py-1 px-2 text-gray-900"
              type="text"
              placeholder="Enter Poll ID"
            />
          </div>
          {poll_ID ? (
            <Link
              className="border w-fit mx-auto px-4 py-1 rounded-md"
              href={`vote/${poll_ID}`}
            >
              View Poll
            </Link>
          ) : (
            <button className="border w-fit mx-auto px-4 py-1 rounded-md">
              View Poll
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ManagePolls;
