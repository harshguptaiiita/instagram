import React from "react";
import styles from "./Header.module.scss";

class Header extends React.Component{
    render(){
        return (
           <nav className={styles.Nav}>
             <div className={styles.NavMenus}>
               <div className={styles.NavBrand}>
                 <a className={styles.NavBrandLogo} href="/">
                   Instagram
                 </a>
               </div>
             </div>
           </nav>
       );
    }   
}
export default Header;
