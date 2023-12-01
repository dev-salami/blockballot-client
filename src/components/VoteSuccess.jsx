import Image from "next/image";
import React from "react";
import congratulation from "../../public/congratulation.png";
import Link from "next/link";

function VoteSuccess() {
  return (
    <section className=" text-white fixed inset-0 z-50 bg-black/90  backdrop-blur-sm">
      <div className="h-full flex justify-center items-center">
        <div className="max-w-md border  border-[#D434FE]   rounded-md mx-auto flex flex-col  items-center">
          <div>
            <Image
              className="  w-fit"
              src={congratulation}
              alt="big-idea"
            ></Image>
          </div>
          <div className="text-center flex flex-col gap-4 p-4">
            <p>
              Congratulations <br />
              You response to this poll has successfully been saved
            </p>
            <Link
              href="/"
              className="  py-[6px] border bg-black rounded-md w-full"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoteSuccess;
