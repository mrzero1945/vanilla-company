"use client"
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import dynamic from "next/dynamic";
const Home = dynamic(()=> import('../../components/home'), {ssr: false});
export default function John() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}
