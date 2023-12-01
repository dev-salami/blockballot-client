"use client";
import CreatePollButton from "@/components/Button/CreatePollButton";
import OptionInput from "@/components/OptionInput";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import WhiteList from "@/components/WhiteListInput";

function Page() {
  const [question, setQuestion] = useState("");

  const [option, setOption] = useState([""]);
  const [public__access, setPublic__access] = useState(null);
  const [whiteList, setWhiteList] = useState([""]);
  const args = [public__access, whiteList, question, option];

  function hasEmptyString(arr) {
    // Check if any element in the array is an empty string
    if (arr.length === 0) {
      return false;
    } else {
      return arr.some((element) => element.trim() === "");
    }
  }

  // const handleInputChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const newInputs = [...inputs];
  //   newInputs[index] = { ...newInputs[index], [name]: value };
  //   setInputs(newInputs);
  // };

  // const handleAddInput = () => {
  //   setInputs([...inputs, { option: "" }]);
  // };

  // const handleDeleteInput = (index) => {
  //   const newInputs = [...inputs];
  //   newInputs.splice(index, 1);
  //   setInputs(newInputs);
  // };
  // const itemListSubmit = (event) => {
  //   // event.preventDefault();
  //   // Retrieve all input data from the state
  //   const inputData = inputs.map((input) => input);
  //   // return inputData;
  //   // Perform desired action with the input data
  //   console.log(inputData);
  //   console.log(inputs);
  // };

  // const renderInputs = () => {
  //   return inputs.map((input, index) => (
  //     <div key={index}>
  //       <form className="flex   gap-3 mt-1" key={index}>
  //         <div className=" flex flex-col gap-1 w-full ">
  //           <input
  //             className=" border border-black rounded-md py-1 px-2 text-gray-900"
  //             type="text"
  //             name={`Option${index + 1}`}
  //             value={input.name}
  //             onChange={(event) => handleInputChange(index, event)}
  //             placeholder={`Option ${index + 1}`}
  //           />
  //         </div>

  //         {index > 0 && (
  //           <button
  //             className="flex items-end text-2xl font-extrabold "
  //             onClick={() => handleDeleteInput(index)}
  //           >
  //             *
  //           </button>
  //         )}
  //       </form>
  //       <hr className="border my-4  " />
  //     </div>
  //   ));
  // };
  return (
    <>
      <Navbar />
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
          {/* <div>
            <p className="mt-3 pl-2 font-semibold">Poll Options</p>
            {renderInputs()}
            <button
              className=" bg-black text-white w-full  py-1 px-3 rounded-md"
              onClick={handleAddInput}
            >
              Add More Option
            </button>
            <button
              className="mt-4 bg-black text-white w-full font-semibold py-1 px-3 rounded-md"
              onClick={itemListSubmit}
            >
              Create Poll
            </button>
           
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Page;
