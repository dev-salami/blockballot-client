"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [Open, setOpen] = useState(false);
  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    Open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkArray = [
    { href: "/", title: "Home" },
    { href: "/vote", title: "Vote" },
    { href: "/create-poll", title: "Create Poll" },
    { href: "/poll", title: "manage Poll" },
  ];
  return (
    <div>
      <div className="max-w-7xl text-xs sm:text-base mx-4 p-3 mt-4 bg-white/10 flex justify-between rounded-xl ">
        <div className="bg-gray-900 block md:hidden px-4 py-1 rounded-md  text-sm font-semibold">
          DECI-POLL
        </div>
        <div className="hidden md:flex justify-between w-full  items-center">
          <div className="bg-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
            DECI-POLL
          </div>

          <Link href="/" className="bg-black px-4 py-1 rounded-full">
            Home
          </Link>

          <Link href="/create-poll" className="bg-black px-4 py-1 rounded-full">
            Create Poll
          </Link>
          <Link href="/poll" className="bg-black px-4 py-1 rounded-full">
            View Polls
          </Link>
          <Link href="/vote" className="bg-black px-4 py-1 rounded-full">
            Vote
          </Link>
          <ConnectWallet className="!text-xs !w-fit" />
        </div>

        <button
          className="bg-black block md:hidden px-4 py-1 rounded-full"
          onClick={() => setOpen((prev) => !prev)}
        >
          MENU
        </button>
      </div>
      <AnimatePresence>
        {Open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" fixed origin-top inset-0 z-50 bg-black w-full text-center gap-6 justify-center  flex sm:hidden flex-col "
          >
            <div>
              <div className="top-4 justify-between px-4 w-full absolute flex items-center">
                <p className="bg-gray-900 block sm:hidden px-4 py-1 rounded-md">
                  DECI-POLL
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-900 block sm:hidden p-2 rounded-full"
                >
                  <FaTimes size={25} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {linkArray.map((link, index) => (
                  <div
                    onClick={() => setOpen(false)}
                    className="overflow-hidden"
                    key={index}
                  >
                    <MobileLink href={link.href} title={link.title} />
                  </div>
                ))}
                <ConnectWallet className="!bg-transparent !text-white !uppercase !w-fit !mx-auto" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;

const MobileLink = ({ title, href }) => {
  const linkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },

    Open: {
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={linkVars}
      initial="initial"
      animate="Open"
      className=" px-4 py-1 uppercase"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
