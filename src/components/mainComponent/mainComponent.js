
import React from 'react';

import styles from './mainComponent.module.css';

import Rows from '../rows/Rows';


const MainComponent = (props) => {
    
    const {data} = props;
    const dataSubset = data.slice(0, 5);
    
    const renderRows = () => {
        return dataSubset.map((elem) => {
            return (

                <Rows key={elem.target.id} data={elem}/>
            )
        })
    }

        return (
            <div className={styles.mainComponent}>
                <table className={styles.table}>

                    <thead className={styles.header}>
                        <tr className={styles.row}>
                            <td></td>
                            <td>Symbol</td>
                            <td>Gene ID</td>
                            <td>Gene Name</td>
                            <td>Overall Association Score</td>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {renderRows()}                                            
                       
                    </tbody>

                </table>

            </div>
        )
    
}

export default MainComponent;