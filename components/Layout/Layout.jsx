import NavBar from "../organisms/NavBar";
import Footer from "../organisms/footer/footer"

export default function Layout({ children }){
return (
    <>
    <NavBar/>
    <Footer />
    <main>{children}</main>


    </>
)
}