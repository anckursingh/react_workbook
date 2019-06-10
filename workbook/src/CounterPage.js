import React from 'react'
import Counter from './counter'
import { Provider ,connect} from 'react-redux'
import store from './store'
//import {connect} from 'react-redux';
class CounterPage extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return( 
        <Provider store={store}> 
            <Counter/>
            </Provider> );
    }
}
// function mapStateToProperty(state){
//     console.log('mapStateToProperty',state)
//     return {
//         count: state.count
//     }
// }
export default CounterPage;