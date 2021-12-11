import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout ({children}) {
    return(
        <div className="main">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}