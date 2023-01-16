
import Image from "next/image"
export default function Logo({logo}){
    return (
        <div>
            <Image src={logo} alt="/No_image_placeholder.jpg" width="64" height="64"/>
        </div>
    )

}