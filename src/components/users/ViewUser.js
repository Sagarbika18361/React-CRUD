import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams ,Link} from "react-router-dom";


const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

   const {id}=useParams();

   useEffect(() => {
    loadUser();
  }, []);

   const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`);
    setUser(result.data);
    console.log(result.data)
  };
  return (
    <>
      <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      {/* <ul className="list-group w-75">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul> */}
      <table class="table">
  <thead className="bg-dark text-white">
    <tr className="mb-4">
      <th className="border-primary bg-secondary">User Details :-</th>
      <th className="text-end border-primary bg-secondary "></th>
    </tr>
    <tr>
      <th >Name :</th>
      <th >{user.name}</th>
    </tr>
    <tr>
      <th >Username :</th>
      <th >{user.username}</th>
    </tr>
    <tr>
      <th >Email :</th>
      <th >{user.email}</th>
    </tr>
    <tr>
      <th >Phone Number :</th>
      <th >{user.phone}</th>
    </tr>
    <tr>
      <th >Website Name :</th>
      <th >{user.website}</th>
    </tr>
  </thead>
</table>
    </div>
    </>
  )
}

export default ViewUser