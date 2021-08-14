import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';


const Home = () => {

  const [users,setUsers] = useState([]);
//  console.log(users)
   useEffect(()=>{
       const url = `https://jsonplaceholder.typicode.com/users`;
       fetch(url)
       .then(res => res.json())
       .then(data => setUsers(data))
   },[])

    return (
        <div>
            {
                users.map(user => <Users key={user.id} user={user}></Users>)
            }
        </div>
    );
};

export default Home;