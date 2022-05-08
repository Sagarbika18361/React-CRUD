// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import { a } from "react-router-dom";
// import {Link} from "react-router-dom"
// // import { useNavigate } from 'react-router';

// const Home = () => {
//   const [users, setUsers] = useState([]);
//   console.log(users);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3005/users");
//     // console.log(result);
//     setUsers(result.data.reverse());
//   };

// //   let navigate=useNavigate();
// //  let onNavig=()=>{
// //     navigate('/')
// //   }

// const deleteUser = async (id) =>{
//   const delresult = await axios.delete(`http://localhost:3005/users/${id}`)
//   console.log(delresult)
//   loadUsers();
// }

//   return (
//     <>
//       <div className="container">
//         <div className="py-4">
//           <h1>Home Page</h1>
//           <table class="table border shadow">
//             <thead className="bg-dark text-white">
//               <tr>
//                 <th scope="col">#ID</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">User Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Action</th>
//               </tr>
//             </thead>
//             <tbody>

//               {
//                 users.map((curElem,index)=>{
//                   return (
//                     <tr key={index}>
//                     <th scope="row">{index + 1}</th>
//                     <td>{curElem.name}</td>
//                     <td>{curElem.username}</td>
//                     <td>{curElem.email}</td>
//                     <td>
//                       <Link className="btn btn-primary me-2" to={`/users/${curElem.id}`}> View</Link>
//                       <Link className="btn btn-outline-success me-2 " to={`/users/edit/${curElem.id}`}> Edit</Link>
//                       <a className="btn btn-danger"  onClick={()=>deleteUser(curElem.id)}> Delete</a>
//                     </td>
//                     </tr>
//                   )
//                 })
//               }

//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// practice

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { a } from "react-router-dom";
import {Link} from "react-router-dom"
// import { useNavigate } from 'react-router';

const Home = () => {
  const [users, setUsers] = useState([]);
//   console.log(users);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3005/users");
    // console.log(result);
    setUsers(result.data.reverse());
  };

  //  let navigate=useNavigate();
  // let onNavig=()=>{
  //    navigate('/')
  //  }

const deleteUser = async (id) =>{
  console.log(id)
  const delresult = await axios.delete(`http://localhost:3005/users/${id}`)
  console.log(delresult)
  loadUsers();
}
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Users Page</h1>
          <table class="table border shadow">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
              users.map((curElem,index)=>{
                return(
                  <tr >
                    {/* <th>{curElem.id} </th> */}
                    <th>{index + 1 } </th>
                    <td>{curElem.name}</td>
                    <td>{curElem.username}</td>
                    <td>{curElem.email}</td>
                    <td>
                      <Link className="btn btn-primary me-2" to={`/users/${curElem.id}`}> View</Link>
                      <Link className="btn btn-outline-success me-2 text-dark " to={`/users/edit/${curElem.id}`} > Edit </Link>
                      <a className="btn btn-danger" onClick={()=>deleteUser(curElem.id)}  > Delete</a>
                    </td>
                    </tr> 
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;


