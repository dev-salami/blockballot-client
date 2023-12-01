import React, { useState } from "react";
import { FaPoll } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const WhiteList = ({ access, setAddress, address }) => {
  //   const [address, setAddress] = useState([{ value: "" }]);

  const handleAddAddress = () => {
    setAddress([...address, ""]);
  };

  const handleRemoveAddress = (index) => {
    if (address > 1 && access) {
      const newaddress = [...address];
      newaddress.splice(index, 1);
      setAddress(newaddress);
    }
  };

  const handleAddressChange = (index, event) => {
    const newaddress = [...address];
    newaddress[index] = event.target.value;
    setAddress(newaddress);
  };

  const handleGetAddressValues = () => {
    const addressValues = address.map((field) => field.value);
    console.log("Address Values:", addressValues);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="pl-2 font-semibold" htmlFor="title">
        WhiteList Address
      </label>
      <div>
        {address.map((field, index) => (
          <div key={index} className="flex gap-4 items-center mb-2">
            <input
              type="text"
              className="border border-black rounded-md py-1 px-2 text-gray-900 w-full"
              placeholder="Enter Address"
              value={field.value}
              onChange={(e) => handleAddressChange(index, e)}
            />
            <button
              type="button"
              className="px-4 py-2 bg-black text-white rounded"
              onClick={() => handleRemoveAddress(index)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
        <button
          type="button"
          className=" bg-black text-white w-full font-semibold py-1 px-3 rounded-md"
          onClick={handleAddAddress}
        >
          Add more address
        </button>
      </div>
    </div>
  );
};

export default WhiteList;

// import React, { useState } from "react";
// import { FaPoll } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// const WhiteList = ({ setAddress, address }) => {
//   //   const [address, setAddress] = useState([{ value: "" }]);

//   const handleAddAddress = () => {
//     setAddress([...address, { value: "" }]);
//   };

//   const handleRemoveAddress = (index) => {
//     const newaddress = [...address];
//     newaddress.splice(index, 1);
//     setAddress(newaddress);
//   };

//   const handleAddressChange = (index, event) => {
//     const newaddress = [...address];
//     newaddress[index].value = event.target.value;
//     setAddress(newaddress);
//   };

//   const handleGetAddressValues = () => {
//     const addressValues = address.map((field) => field.value);
//     console.log("Address Values:", addressValues);
//   };

//   return (
//     <div className="flex flex-col gap-1">
//       <label className="pl-2 font-semibold" htmlFor="title">
//         WhiteList Address
//       </label>
//       <div>
//         {address.map((field, index) => (
//           <div key={index} className="flex gap-4 items-center mb-2">
//             <input
//               type="text"
//               className="border border-black rounded-md py-1 px-2 text-gray-900 w-full"
//               placeholder="Enter Address"
//               value={field.value}
//               onChange={(e) => handleAddressChange(index, e)}
//             />
//             <button
//               type="button"
//               className="px-4 py-2 bg-black text-white rounded"
//               onClick={() => handleRemoveAddress(index)}
//             >
//               <MdDelete />
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           className=" bg-black text-white w-full font-semibold py-1 px-3 rounded-md"
//           onClick={handleAddAddress}
//         >
//           Add more address
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WhiteList;
