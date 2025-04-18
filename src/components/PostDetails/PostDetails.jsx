import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const Post = useLoaderData();
    // const{title,body}= Post;
    const navigate=useNavigate();
    const handleGoBack= () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3> hellow i am from Post Details</h3>
            <div>
                <h2>title = {Post.title}</h2>
                <p>body = {Post.body}</p>
                <button style={{
                    backgroundColor:'yellowgreen',
                    
                }} onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;