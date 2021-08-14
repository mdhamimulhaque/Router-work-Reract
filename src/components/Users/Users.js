import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './User.css';

const Users = (props) => {
    // console.log(props.user)
    const {name,id,email} =props.user;
    
    const history = useHistory();

    const showDetails = (myUserId) =>{
         history.push(`/user/${myUserId}`);
    }
    
    return (
        <div className="main-container">

           <div className="user-container">
            <div className="user-id">
              <h2>{id}</h2>
            </div>
           <h4>Name : {name}</h4>
           <h4>Email : {email}</h4>

         <Link to={`/user/${id}`} className="link">Show Details</Link>
         <button onClick={()=>showDetails(id)}>Show Details</button>
          

           </div>
        </div>
    );
};

export default Users;