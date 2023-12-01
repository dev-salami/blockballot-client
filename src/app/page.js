import Company from "@/components/Company";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Steps />
      <Company />
    </>
  );
}
