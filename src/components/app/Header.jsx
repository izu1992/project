import React from 'react';
import styles from "./App.scss";

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className={ styles.header }>
                    Hey traveler! Where have you been so far?
                </div>
            </header>
        )
    }
}

export default Header
