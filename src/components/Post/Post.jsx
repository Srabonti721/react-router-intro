import React from 'react';
import { Link, useNavigate } from 'react-router';


const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{
            border: '2px solid green',
            borderRadius: "20px",
            margin: '10px',
            padding: '10px',
        }}>
            <p>title = {title}</p>
            <Link to={`/posts/${id}`}>
                <button style={{
                    backgroundColor: 'black',
                    color: 'white',
                }}>Show Details</button>
            </Link>
            <button style={{ 
                marginLeft:'10px',
                backgroundColor:'purple',
                color:'white',
            }} onClick={handleDetails }>Details of : {id} </button>
        </div>
    );
};

export default Post;