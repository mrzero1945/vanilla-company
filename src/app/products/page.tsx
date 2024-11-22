import { Footer } from "../../../components/footer";
import { Navbar } from "../../../components/navbar";
import { Products } from "../../../components/products";

export default function products(){
    return(
        <div>
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    );
}