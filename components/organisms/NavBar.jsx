import Logo from "../atoms/Logo/Logo"
import NavbarItem from "../atoms/NavbarItem/NavbarItem"
import Image from "next/image"
import styles from "./NavBar.module.css"
import NavBarList from "../molecules/NavbarList/NavBarList"
export default function NavBar(){
    return (
        <div className={styles.NavBar}>
            <Logo logo="/ARK.webp" />
            <NavBarList items={[
                {
                    item:"Introduction",
                    url:"https://www.google.com"
                },
                {
                    item:"About",
                    url:"https://facebook.com"
                },
                {
                    item:"Projects",
                    url:"https://facebook.com"
                },
                {
                    item:"Experience",
                    url:"https://facebook.com"
                },
                {
                    item:"Skills",
                    url:"https://facebook.com"
                }
            ]}/>
        </div>
    )
}