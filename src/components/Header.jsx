"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="my-8 container px-4">
      <div className="text-center leading-[5px] md:leading-3">
        <motion.div
          transition={{ duration: 0.4, delay: 0 }}
          initial={{ opacity: 0, translateX: +60 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="uppercase text-3xl sm:text-5xl md:text-7xl  block"
        >
          make a decentralized
        </motion.div>
        <br />
        <motion.div
          transition={{ duration: 0.4, delay: 0.4 }}
          initial={{ opacity: 0, translateX: -60 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold block"
        >
          polling platform in
        </motion.div>
        <br />
        <motion.div
          transition={{ duration: 0.4, delay: 0.8 }}
          initial={{ opacity: 0, translateX: +60 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="uppercase text-3xl sm:text-5xl md:text-7xl font-bold block"
        >
          seconds
        </motion.div>
      </div>

      <div>
        <motion.p
          transition={{ duration: 0.4, delay: 1.2 }}
          initial={{ opacity: 0, translateX: +60 }}
          animate={{ opacity: 1, translateX: 0 }}
          className="max-w-5xl mt-6 text-sm sm:text-base text-center mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          ratione eius maiores veniam cumque nemo vel quos nesciunt, voluptates
          tempore molestias ad provident, tenetur quia? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Debitis ratione eius maiores veniam
          cumque nemo vel quos nesciunt, voluptates tempore molestias ad
          provident, tenetur quia?
        </motion.p>
        <div className="w-fit mx-auto flex gap-6 mt-6">
          <motion.button
            transition={{ duration: 0.5, delay: 1.5 }}
            initial={{ opacity: 0, translateX: -60 }}
            animate={{ opacity: 1, translateX: 0 }}
            className="px-5 py-1 w-fit rounded-full bg-white text-black font-semibold"
          >
            <Link href="/create-poll">Create Poll</Link>
          </motion.button>
          <motion.button
            transition={{ duration: 0.5, delay: 1.5 }}
            initial={{ opacity: 0, translateX: +60 }}
            animate={{ opacity: 1, translateX: 0 }}
            className=" w-fit rounded-full text-white bg-[#6E40FF] font-semibold"
          >
            <Link className="px-5 py-1" href="/vote">
              Vote
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Header;
