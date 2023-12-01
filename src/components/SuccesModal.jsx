import Image from "next/image";
import React from "react";
import congratulation from "../../public/congratulation.png";
import Link from "next/link";

function Successmodal() {
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
              You have successfully created your Poll
            </p>
            <p>Visit the poll page to view any details about your poll</p>
            <Link
              href="/poll"
              className="  py-[6px] bg-gradient-to-r bg-black rounded-sm w-full"
            >
              View Poll
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Successmodal;
