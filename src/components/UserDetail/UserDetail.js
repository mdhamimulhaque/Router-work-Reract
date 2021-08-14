import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import './UserDetail.css';

const UserDetail = () => {

    const { myUser } = useParams();
    const [users,setUsers] = useState({});
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/users/${myUser}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])

    const {id,name,email,phone,website} = users;
   
    const history = useHistory();
    const backToHomePage = () => {
        history.push("/home");
    }
    return (
        <div className="main-container">
          <h4><strong><span>ID No :</span> {id}</strong></h4>
          <h3><span>Name : </span> {name}</h3>
          <h3><span>Email : </span> {email}</h3>
          <h3><span>Phone : </span> {phone}</h3>
          <h3><span>Website : </span> {website}</h3>

          <button onClick={backToHomePage}>Back To Home Page</button>
        </div>
    );
};

export default UserDetail;