"use client";
import CreatePollButton from "@/components/Button/CreatePollButton";
import OptionInput from "@/components/OptionInput";
import React, { useState } from "react";
import WhiteList from "@/components/WhiteListInput";
import { uuid } from "uuidv4";

function Page() {
  const [question, setQuestion] = useState("");

  const [option, setOption] = useState([""]);
  const [public__access, setPublic__access] = useState(null);
  const [whiteList, setWhiteList] = useState([""]);
  const args = [uuid(), public__access, whiteList, question, option];

  function hasEmptyString(arr) {
    if (arr.length === 0) {
      return false;
    } else {
      return arr.some((element) => element.trim() === "");
    }
  }

  return (
    <>
      <div>
        <div className="bg-white text-black rounded-2xl p-6 max-w-xl flex flex-col gap-4 mt-6 mx-auto">
          <div className="flex flex-col gap-1">
            <label className="pl-2 font-semibold" htmlFor="title">
              Poll Question
            </label>
            <input
              className="border border-black rounded-md py-1 px-2 text-gray-900"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Select your presidential candidate"
            />
          </div>
          <OptionInput setOption={setOption} option={option} />
          {public__access === "false" && (
            <WhiteList
              access={public__access}
              setAddress={setWhiteList}
              address={whiteList}
            />
          )}
          <div className="">
            <p className="pl-2 font-semibold">Make Poll Publicly Acessible</p>

            <div className="border border-black rounded-md py-1 px-2 ">
              <input
                onChange={(e) => {
                  setPublic__access(e.target.value);
                  setWhiteList([]);
                }}
                type="radio"
                id="true"
                name="public__access"
                value="true"
                className="mr-2"
              />
              <label htmlFor="true" className="mr-4">
                TRUE
              </label>
              <input
                onChange={(e) => {
                  setPublic__access(e.target.value);
                  setWhiteList([""]);
                }}
                type="radio"
                id="false"
                name="public__access"
                value="false"
                className="mr-2"
              />
              <label htmlFor="false">FALSE</label>
            </div>
          </div>

          <CreatePollButton
            args={args}
            isInputValid={
              hasEmptyString(option) ||
              hasEmptyString(whiteList) ||
              !question ||
              !option ||
              public__access === null
                ? true
                : false
            }
          />
          <button onClick={() => console.log(args)}>TEST</button>
        </div>
      </div>
    </>
  );
}

export default Page;
