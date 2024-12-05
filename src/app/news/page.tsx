import { VanillaNewsPage } from "../../../components/news";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import Image from "next/image";
export default function News() {
    return(
        <div>
          <Navbar/>
          <VanillaNewsPage/>
          <Footer/>
        </div>
        
    )
}