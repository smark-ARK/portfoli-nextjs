import styles from "./NavBarItem.module.css"
export default function NavbarItem({item,url}){
    // console.log(props.item,props.url)
    return (
        <li className={styles.NavBarItem}><a className={styles.NavAnchor} href={url}>{item}</a></li>
    )

}