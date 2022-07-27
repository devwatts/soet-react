import Footer from "../../pages/components/footer";
import Navbar from "../../pages/components/navbar"
import FacultyNavbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
            <FacultyNavbar/>
            {children}
            <Footer/>
        </div>
    );
}
 
export default Layout;