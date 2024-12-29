"use client"
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import dynamic from "next/dynamic";
const Sustainability = dynamic(()=> import('../../../components/sustainability2'), {ssr: false});

export default function sustain(){
    return(
        <div>
            <Navbar/>
            <Sustainability/>
            <Footer/>
        </div>
    );
}