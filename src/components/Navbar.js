// import React from "react";
// import { NavLink } from "react-router-dom";
// // import About from "../pages/About";
// // import Contact from "../pages/Contact";
// // import Home from "../pages/Home";
// // import NotFound from "../pages/NotFound";

// const Navbar = () => {
//   return (
//     <>
//       <div className="navb">
//         <nav className="navbar navbar-expand-lg navbar-dark  bg-dark text-white">
//           <div className="container">
//             <a className="navbar-brand" href="/">
//               Navbar
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <NavLink className="nav-link " aria-current="page" to="/">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/about">
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/contact">
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
              
//             </div>
//             <a className="btn btn-outline-primary" href="/users/add'> Add User</a>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// practice

import React from "react";
import { NavLink } from "react-router-dom";
// // import About from "../pages/About";
// // import Contact from "../pages/Contact";
// // import Home from "../pages/Home";
// // import NotFound from "../pages/NotFound";

const Navbar = () => {
  return (
    <>
      <div className="navb">
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark text-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              
            </div>
            <NavLink className="btn btn-outline-primary" to="/users/add" > Add Your Own User</NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
