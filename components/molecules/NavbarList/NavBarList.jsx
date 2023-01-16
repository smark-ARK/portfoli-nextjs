import styles from "./NavBarList.module.css"
import NavbarItem from "../../atoms/NavbarItem/NavbarItem"
export default function NavBarList({items}){
    return (
        <>
      
        <ul className={styles.NavBarList}>
        {
        items.map((elem)=>{
        return (
            <NavbarItem {...elem}/>
        )
    })
    }
    </ul>
    </>
    )

}