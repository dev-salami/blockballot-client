import React from "react";

function Usepoll() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-y-1/2  inset-0 mx-auto h-fit -translate-x-1/2">
      <div className="max-w-lg flex gap-4 flex-col p-6 rounded-xl bg-white/50">
        <div className="flex flex-col gap-1">
          <label className="pl-2 font-semibold" htmlFor="title">
            Poll Address
          </label>
          <input
            className="border border-black rounded-md py-1 px-2 text-gray-900"
            type="text"
            placeholder="Enter Poll Address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="pl-2 font-semibold" htmlFor="title">
            Poll ID
          </label>
          <input
            className="border border-black rounded-md py-1 px-2 text-gray-900"
            type="number"
            placeholder="Enter Poll ID"
          />
        </div>
        <button className="border-black rounded-md border py-1 px-4">
          Use Poll
        </button>
      </div>
    </div>
  );
}

export default Usepoll;
