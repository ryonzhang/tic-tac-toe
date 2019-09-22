import React, {Component} from 'react';
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
import ThemeContext from "../contexts/theme-context";
import ThemeBar from "./ThemeBar";

const themes ={
    light: {
        classnames: 'btn btn-primary',
        bgColor: '#eee',
        color: '#000'
    },
    dark:{
        classnames:'btn btn-light',
        bgColor: '#222',
        color:'#fff'
    }
};
class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            comments:['this is my first'],
            theme:'light'
        }
        this.onAddComment = this.onAddComment.bind(this)
        this.onChangeTheme = this.onChangeTheme.bind(this)
    }
    onAddComment(comment){
        this.setState({
            comments:[...this.state.comments,comment]
        })
    }
    onChangeTheme(theme){
        this.setState({
            theme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="comment-app">
                    <a href="#theme-switcher" className="btn btn-light" onClick={()=>this.onChangeTheme('light')}>
                        light
                    </a>
                    <a href="#theme-switcher" className="btn btn-secondary"  onClick={()=>this.onChangeTheme('dark')}>
                        dark
                    </a>
                    <ThemeBar/>
                    <CommentList comments={this.state.comments} />
                    <CommentBox onSubmit={this.handleChange}  onAddComment={this.onAddComment} length={this.state.comments.length}/>
                </div>
            </ThemeContext.Provider>

        );
    }
}

export default Comment;