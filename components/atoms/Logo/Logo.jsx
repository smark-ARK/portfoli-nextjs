
import Image from "next/image"
import styles from "./Logo.module.css"
export default function Logo({logo}){
    return (
        <div className={styles.LogoDiv}>
            <Image src={logo} alt="/No_image_placeholder.jpg" width="64" height="64"/>
        </div>
    )

}