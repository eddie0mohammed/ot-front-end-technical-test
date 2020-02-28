
import React from 'react';

import styles from './Rows.module.css';

import Chart from '../chart/Chart';


class Rows extends React.Component{

    state = {
        showGraph: false
    }

    toggleGraph = () => {
        this.setState({
            showGraph: !this.state.showGraph
        })
    }

    render(){
        const {data} = this.props;

        const {literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway} = data.association_score.datatypes;
        const labels = ['literature', 'rna_expression', 'genetic_association', 'somatic_mutation', 'known_drug', 'animal_model', 'affected_pathway'];
        const values = [literature, rna_expression, genetic_association, somatic_mutation, known_drug, animal_model, affected_pathway];

        
        return (
            <>

            <tr>
                <td className={styles.plusBtn} onClick={this.toggleGraph}>+</td>
                <td>{data.target.gene_info.symbol}</td>
                <td>{data.target.id}</td>
                <td>{data.target.gene_info.name}</td>
                <td>{data.association_score.overall}</td>
            </tr>

            {this.state.showGraph ? 
                <tr >
                    <td colSpan="5">

                        <Chart labels={labels} values={values}/>
                        
                    </td>
                </tr>
                :
                null
            }



            </>
        )

    }
}

export default Rows;