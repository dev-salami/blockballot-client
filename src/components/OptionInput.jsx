import React from "react";
import { MdDelete } from "react-icons/md";

const DynamicOption = ({ setOption, option }) => {
  const handleAddOption = () => {
    setOption([...option, ""]);
  };

  const handleRemoveOption = (index) => {
    if (option.length > 1) {
      const newoption = [...option];
      newoption.splice(index, 1);
      setOption(newoption);
    }
  };

  const handleOptionChange = (index, event) => {
    const newoption = [...option];
    newoption[index] = event.target.value;
    setOption(newoption);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="pl-2 font-semibold" htmlFor="title">
        Poll Options
      </label>
      <div>
        {option.map((data, index) => (
          <div key={index} className="flex gap-4 items-center mb-2">
            <input
              type="text"
              className="border border-black rounded-md py-1 px-2 text-gray-900 w-full"
              placeholder="Enter Option"
              value={data}
              onChange={(e) => handleOptionChange(index, e)}
            />

            <button
              type="button"
              className="px-4 py-2 bg-black text-white rounded"
              onClick={() => handleRemoveOption(index)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
        <button
          type="button"
          className=" bg-black text-white w-full font-semibold py-1 px-3 rounded-md"
          onClick={handleAddOption}
        >
          Add more option
        </button>
      </div>
    </div>
  );
};

export default DynamicOption;
