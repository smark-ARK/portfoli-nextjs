import NavBar from "../organisms/NavBar";

export default function Layout({ children }){
return (
    <>
    <NavBar/>
    <main>{children}</main>
    </>
)
}