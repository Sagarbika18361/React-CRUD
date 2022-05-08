// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import About from "./pages/About"
// import NotFound from "./pages/NotFound"
// import Navbar from './components/Navbar';
// import { BrowserRouter,Routes, Route , Link } from 'react-router-dom';
// import AddUser from './components/users/AddUser';
// import EditUser from './components/users/EditUser';
// import ViewUser from './components/users/ViewUser';


// function App() {
//   return (
//   <>
//     <Navbar />
//     {/* <BrowserRouter> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users/add" element={<AddUser />} />
//         <Route path="/users/:id" element={<ViewUser />} />
//         <Route path="/users/edit/:id" element={<EditUser />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     {/* </BrowserRouter> */}
// </>
//   );
// }

// export default App;


// practice

// import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar';
import { BrowserRouter,Routes, Route , Link } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';


function App() {
  return (
  <>
    <Navbar />
    {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/:id" element={<ViewUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    {/* </BrowserRouter> */}
</>
  );
}

export default App;


