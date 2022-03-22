import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';

const CardComments = (post) => {
    const [text, setText] = useState("");
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleComment = (e) => {
        e.preventDefault();
    
        if (text) {
          //dispatch(addComment(post._id, userData._id, text, userData.pseudo))
            //.then(() => dispatch(getPosts()))
           // .then(() => setText(''));
        }
    };

    return (
        <div className="comments-container">
            {post.comments.map((comment) => {
                return (
                    <div></div>
                )
            })}
        </div>
    );
};

export default CardComments;