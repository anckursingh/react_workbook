import React from 'react';
import ReactDOM from 'react-dom';

class CommentBox extends React.Component{
    commentLength=0;
    currentComment='';
    currentCommentArray=[];
    previousComment = '';
    // showAllComments = false;
    allComments = [];
    anchorStyle = {cursor: 'pointer'};
    constructor(props) {
        super(props);
        this.state={
            comment: ['comment1','comment2'],
            showAllComments: false
        }
        this.changeText = this.changeText.bind(this);
        this.submitText = this.submitText.bind(this);
        this.showAllCommentsFtn = this.showAllCommentsFtn.bind(this);
        this.commentLength = this.state.comment.length;
        this.previousComment = this.state.comment[this.commentLength-1];
        this.allComments = this.state.comment;
    }

    changeText(event){
        this.currentComment = event.target.value;
    }

    submitText(event){
        this.currentCommentArray = this.state.comment;
        this.currentCommentArray.push(this.currentComment);
        this.setState({comment: this.currentCommentArray});
        this.commentLength++;
        this.previousComment = this.state.comment[this.commentLength-1];
        event.preventDefault();
    }

    showAllCommentsFtn(event) {
        this.allComments = this.state.comment;
        this.setState({showAllComments: true});
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitText}>
                    <textarea rows="4" cols="50" placeholder='comment' onChange={this.changeText}/>
                    <input type="submit" value ='submit' />
                    <br></br>
                    Previous comment: 
                    <textarea rows="4" cols="50" placeholder='previous comment' 
                        value={this.previousComment} readOnly/>
                </form>
                <p><a style={this.anchorStyle} onClick={this.showAllCommentsFtn}>Click here</a> to see all comments.</p>
                {
                    this.state.showAllComments ?
                    (<ul>
                        {
                            this.allComments.map((comments, index) => <li key={index}>{comments}</li>)
                        }
                    </ul>) : ''
                } 
            </div>
        )
    }
}
export default CommentBox;