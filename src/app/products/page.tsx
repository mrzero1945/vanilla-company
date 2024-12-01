'use client';
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

import dynamic from 'next/dynamic';

const Products = dynamic(() => import('../../../components/products'), { ssr: false });

export default function products(){
    return(
        <div>
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    );
}