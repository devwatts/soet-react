import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar"
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