import React, { Component } from 'react';
import Loading from './Loading';
import { getTranslators } from '../Api';

export default class Translators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translators: null,
        };
    }

    componentDidMount(){
        this.loadData();
    }

     loadData = () => {
        getTranslators().then((response) => {
            if (response.ok) {
                    console.log('Translators loaded');
                    response.json().then((jsonData)=>{
                        this.setState({ translators: jsonData });
                })                
            } else {
                throw response;
            }
        })
    }


    rows = () =>  this.state.translators.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.hourlyRate}</td>
                <td>{item.status}</td>
                <td>{item.creditCardNumber}</td>
            </tr>
        ));

    render() {
        if(this.state.translators){
        return([
                <h2>Translators</h2>,
                <table>
                <thead>
                        <tr>
                        <th>Name</th>
                        <th>Hourly rate</th>
                        <th>Status</th>
                        <th>Credit card number</th>
                    </tr>
                </thead>
                <tbody>
                    {this.rows()}
                </tbody>
                </table>
           
        ]);
        }
        return <Loading />;
    }
  }