"use client";
import React, { useState } from "react";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Loader from "@/components/LoaderSm";
function ManagePolls() {
  const [poll_ID, setPoll_ID] = useState(2);

  return (
    <>
      <Navbar />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2  inset-0 mx-auto h-fit -translate-x-1/2">
        <div className="max-w-lg flex gap-4 flex-col p-6 rounded-xl bg-gray-900 border">
          <div className="flex flex-col gap-1">
            <label className="pl-2 font-semibold" htmlFor="title">
              Poll ID
            </label>
            <input
              onChange={(e) => setPoll_ID(e.target.value)}
              value={poll_ID}
              className="border border-black rounded-md py-1 px-2 text-gray-900"
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
