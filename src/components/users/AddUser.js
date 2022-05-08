// // import { axios } from 'axios'
// // import React from 'react'
// // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // const AddUser = () => {

// //     const history= useNavigate();

// //     const [user,setUser]=useState({
// //         name:"",
// //         username:"",
// //         email:"",
// //         phone:"",
// //         website:""
// //     })
// //     // const [name,username,email,phone,website]=user;

// //     const changeValue=(e)=>{
// //         console.log(e.target.value)
// //         setUser({...user,[e.target.name]:e.target.value})
// //     }
// //     const onSubmit= async (e)=>{
// //         e.preventDefault();
// //         await axios.post("http://localhost:3005/users",user)
// //         history("/")
// //     }

// //   return (
// //     <>
// //         <div className="container border shadow py-4 my-5">
// //         <h1 >Add User</h1>
// //         <div className="py-4">
// //           <form onSubmit={onSubmit}>
// //             <div class="mb-3">
// //               <input
// //                 type="text"
// //                 class="form-control"
// //                 id="exampleInputEmail1"
// //                 placeholder='Enter Your Name'
// //                 name='name'
// //                 value={user.name}
// //                 onChange={changeValue}
// //               />
// //             </div>
// //             <div class="mb-3">
// //               <input
// //                 type="text"
// //                 class="form-control"
// //                 id="exampleInputEmail1"
// //                 placeholder='Enter Your UserName'
// //                 name='username'
// //                 value={user.username}
// //                 onChange={changeValue}
// //               />
// //             </div>
// //             <div class="mb-3">
// //               <input
// //                 type="number"
// //                 class="form-control"
// //                 id="exampleInputEmail1"
// //                 placeholder='Enter Your Phone no.'
// //                 name='phone'
// //                 value={user.phone}
// //                 onChange={changeValue}
// //               />
// //             </div>
// //             <div class="mb-3">
// //               <input
// //                 type="email"
// //                 class="form-control"
// //                 placeholder='Enter Your Email'
// //                 id="exampleInputEmail1"
// //                 name='email'
// //                 value={user.email}
// //                 onChange={changeValue}
// //               />
// //               <div id="emailHelp" class="form-text">
// //                 We'll never share your email with anyone else.
// //               </div>
// //             </div>
// //             <div class="mb-3">
// //               <input
// //                 type="text"
// //                 class="form-control"
// //                 id="exampleInputEmail1"
// //                 placeholder='Enter Your Website Name.'
// //                 name='website'
// //                 value={user.website}
// //                 onChange={changeValue}
// //               />
// //             </div>
// //             <button type="submit" class="btn btn-primary w-100">
// //               Add User
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default AddUser

// import React, { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from 'react-router';

// const AddUser = () => {
//   let navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: ""
//   });

//   const { name, username, email, phone, website } = user;
//   const onInputChange = (e) => {
//     console.log(e)
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:3005/users", user);
//     navigate("/");
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg mb-2"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={ onInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg mb-2"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//             //   value={user.username} we can write like that also
//               onChange={ onInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-control form-control-lg mb-2"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={ onInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg mb-2"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={ onInputChange}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg mb-2"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={ onInputChange}
//             />
//           </div>
//           <button className="btn btn-primary btn-block w-100">Add User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

// practice

import axios from "axios";
import React, { useState } from "react";
// import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  // useEffect(() => {
  //   loadUser();
  // }, []);

  // const loadUser = async () => {
  //   await axios.post("http://localhost:3005/users");
  // };

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  
  const { name, username, email, phone, website } = user;
  const navigate=useNavigate();

  // const onInputChange =(e)=>{
  //   setUsers({...users,[e.targer.name]:e.target.value})
  // }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //  const result= await axios.post("http://localhost:3005/users",users)
  //  console.log(result.data);
  //  navigate("/")
  // };

  const onInputChange = (e) => {
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3005/users", user);
        navigate("/");
      };

  return (
    <div className="container my-5">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              // value={username}
              //   value={user.username} we can write like that also
              // onChange={ onInputChange}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Website Name"
              onChange={onInputChange}
              name="website"
              value={website}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
