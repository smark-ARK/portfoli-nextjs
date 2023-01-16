import styles from "./footer.module.css"



export default function footer(){
    return(
        <div className={styles.Footer}>
            <p>
                &copy;    Copyright 2023. All Rights Reserved.
            </p>
        </div>
    )
}