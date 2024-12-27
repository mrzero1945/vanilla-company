'use client';
import { FloatingWA } from "../../../components/floating-wa";
import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

import dynamic from 'next/dynamic';

const Products = dynamic(() => import('../../../components/products2'), { ssr: false });

export default function products(){
    return(
        <div>
            <Navbar/>
            <Products/>
            <Footer/>
            <FloatingWA/>
        </div>
    );
}