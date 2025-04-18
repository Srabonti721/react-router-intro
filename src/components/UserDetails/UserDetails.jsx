
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  
    const user = useLoaderData();
    const { name, username } = user;
    const userStyle={
        border:"2px solid blue",
        borderRadius:'20px',
        margin:'10px',
        padding:'10px',
    }

    return (
        <div style={userStyle}>
            <h2>user data comming </h2>
            <h4>name : {name} </h4>
            <h5>username : {username}</h5>
            

        </div>
    );
};

export default UserDetails;