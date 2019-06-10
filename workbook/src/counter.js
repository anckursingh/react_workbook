import React from 'react';
import { connect } from 'react-redux'
import ram_mandir from './images/ram_mandir.jpg'
import thumbs_up from './images/thumbs_up.png'
import thumbs_down from './images/thumbs_down.jpg'


class Counter extends React.Component{
    constructor(props){
       // let ram_mandir = './src/images/ram_mandir.jpg';
        super(props);
        // this.state={
        //     count: 0
        // }
        
this.incrementCount = this.incrementCount.bind(this);
this.decrementCount = this.decrementCount.bind(this);
    }
    
    incrementCount(){
        console.log('increment count',this.props.count)
        console.log(ram_mandir);
        //this.setState({count : this.state.count +1});
        this.props.dispatch({ type: 'INCREMENT_ACTION' });
    }
    decrementCount(){
            console.log('decrement count',this.props.count)
            //this.setState({count : this.state.count -1});
            this.props.dispatch({ type: 'DECREMENT_ACTION' });
    }
    render(){
        return(
            <div><img src={ram_mandir} 
            alt="ram lala hm aaenge mandir wahin banaenge" 
            height="300" width="400"/>
            <table>
                <tbody>
                <tr>
                <th><h1>mandir yahin banega</h1></th>
                </tr>
                <tr>
                <td><button onClick={this.incrementCount}><img src={thumbs_up} 
            alt="thumbs up" 
            height="30" width="40"/></button>
                {this.props.count}
                <button onClick={this.decrementCount}><img src={thumbs_down} 
            alt="thumbs down" 
            height="30" width="40"/></button></td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}
function mapStateToProperty(state){
    console.log('mapStateToProperty',state)
    return {
        count: state.count
    }
}
export default connect (mapStateToProperty)
   (Counter);
    //