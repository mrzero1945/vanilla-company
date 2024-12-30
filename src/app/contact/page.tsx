"use client"
import dynamic from "next/dynamic";
const Contact = dynamic(()=> import("../../../components/contact2"), {ssr:false})
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

export default function contact() {
    return(
        <div>
        <Navbar/>
        <Contact/>
        <Footer/>
        </div>
    )
}