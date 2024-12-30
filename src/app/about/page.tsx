import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import dynamic from "next/dynamic";
import { FloatingWA } from "../../../components/floating-wa";
const AboutUs = dynamic(()=> import('../../../components/about'))
export default function About() {
    return(
        <div>
            <Navbar/>
            <AboutUs/>
            <Footer/>
            <FloatingWA/>
        </div>
    );
}