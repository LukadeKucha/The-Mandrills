import HomeNavbar from "../../components/home/navbar";
import styles from "./styles.module.scss";

function tmgPage(){
    return(
        <div className={styles.tmgWrapper}>
            <HomeNavbar/>            
        </div>
    );
}
export default tmgPage