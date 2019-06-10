import React, { Component } from 'react';
import { get } from 'http';
import Axios from 'axios';

class AxiosExample extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
        this.fetchAxiosData=this.fetchAxiosData.bind(this);
    }
    componentDidMount(){
        this.fetchAxiosData();
    }
     fetchAxiosData(){
     Axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
         console.log('fetch axios data'+res.data
         )
         this.setState({data:res.data});
    })
    }
    render() {
        return (
            <div>
                <ul>
                {this.state.data.map(resd =><li>{resd.name}</li> )}
                {/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
                </ul>
               
            </div>
        );
    }
}

export default AxiosExample;