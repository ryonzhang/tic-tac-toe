import React, {Component} from 'react';

const CommentList = ({comments}) =>{
    return (
        <div className="comment-list-component">
            <label htmlFor="">评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment,index)=>
                        <li className="list-group-item" key={index}>{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CommentList;