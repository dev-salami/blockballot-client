"use client";
import React from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
function MyPolls() {
  const { contract } = useContract(
    "0x8245F0413dC75aAe23FE36fb2a328AD228F09296"
  );
  const { data, isLoading } = useContractRead(contract, "getUserPolls");

  console.log(data);

  return <div>MyPolls</div>;
}

export default MyPolls;
