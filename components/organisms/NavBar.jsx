import Logo from "../atoms/Logo/Logo"
import NavbarItem from "../atoms/NavbarItem/NavbarItem"
export default function NavBar(){
    let navprops={
        item:"Ishaq",
        url:"https://www.google.com"
    }
    return (
        <section className="navbar">
            <Logo />
            <NavbarItem {...navprops} />
        </section>
    )
}