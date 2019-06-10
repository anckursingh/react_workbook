// import cx from 'classnames';
import React, { Component }  from 'react';
// import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            likeclass :'like-button',
            count:100
        }
this.onClickLike = this.onClickLike.bind(this);
    }
    onClickLike(){
        if(this.state.likeclass==='like-button'){
            this.setState({
            likeclass : 'liked',
            count: parseInt(this.state.count)+1
        }) 
        }
        else{
            this.setState({
              likeclass : 'like-button',
            count: parseInt(this.state.count)-1
        })  
        }
       
    }
    render() {
        return (
            <>
                <div>
                    <h2>Like Button</h2>
                    <button className={this.state.likeclass} onClick={this.onClickLike}>Like |  <span className='likes-counter'>{this.state.count}</span></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
