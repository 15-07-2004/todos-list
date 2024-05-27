                                      // static header

// import { Link } from "react-router-dom";
// import "./Header.css";
// import { useState } from "react";

// const Header = () => {
//   const headerLinks = [
//     // {
//     //   link: "/",
//     //   text: "Home",
//     // },
//     // {
//     //   link: "/help",
//     //   text: "Help",
//     // },
//     // {
//     //   link: "/policy",
//     //   text: "Policy",
//     // },
//     // {
//     //   link: "/newemp",
//     //   text: "Add New Employee",
//     // },
//     // {
//     //   link: "/emplist",
//     //   text: "My Employees",

//     },
//];

//   return (
//     <div>
//       <ul>
//         {headerLinks.map((item, index) => (
//           <li>
//             <Link to={item.link}>{item.text}</Link>
//           </li>
//         ))}
//         {/* <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/help">Help</Link>
//         </li>
//         <li>
//           <Link to="/policy">Policy</Link>
//         </li>
//         <li>
//           <Link to="/newemp">Add New Employee</Link>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Header;


                                                  //  React Router enables the creation of single-page web or mobile apps 
                                                  // that allow navigating without refreshing the page.



import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
                                      // Axios make HTTP request for Node.js
const Header = () => {
  const [headerLinks, setAppHeaderLinks] = useState([]);

  useEffect(() => {
    getMyHeaders();
  }, []);

  const getMyHeaders = () => {
    axios.get("http://localhost:7777/hetMyHeaderLinks").then((res) => {                  //calling API for static to dynamic header binding from exprees server.js
      setAppHeaderLinks(res.data.headerLinks);
    });
  };
                            //  ul tag together with li tag create unordered list
                             
  return (
    <div>
      <ul>
        {headerLinks.map((item, index) => (
          <li>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
 

                                                    //  web server for UI
                                                    // http://localhost:3000/    npm run start