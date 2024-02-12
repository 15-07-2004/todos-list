//create React App with logo

// import logo from './logo.svg';
// import './App.css';

// import ArrayExamples from './playground/ArrayExamples';
//  ArrayExamples.testArray();
// function App() {
// return (
//   // <div className="App">
//   //   <header className="App-header">
//   //     <img src={logo} className="App-logo" alt="logo" />
//   //     <p>
//   //       Edit <code>src/App.js</code> and save to reload.
//   //       Ankit Yadav
//   //     </p>
//   //     <a
//   //       className="App-link"
//   //       href="https://reactjs.org"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       Learn React
//   //     </a>
//   //   </header>
//   // </div>
// );
// }
// export default App;


// create react app to display the details of employee


// import "./App.css";
// import Employee from "./components/Employee/Employee";

// function App() {
//   const empName = "Ankit Yadav";
//   const age = 19;
//   const joiningDate = new Date(2023, 7, 15);

//   const users = [
//     {
//       name: "Ankit Yadav",
//       age: 19,
//       joinDate: new Date(2023, 7, 15),
//     },
//     {
//       name: "Abhishek Varshney",
//       age: 20,
//       joinDate: new Date(2023, 8, 20),
//     },
//   ];

//   return (
//     <div>
//       <Employee
//         empName={users[0].name}
//         age={users[0].age}
//         joiningDate={users[0].joinDate}
//       ></Employee>
//       <Employee
//         empName={users[1].name}
//         age={users[1].age}
//         joiningDate={users[1].joinDate}
//       ></Employee>
//     </div>
//   );
// }
//  export default App;


//create a previous employee details in about section and a form for new employee section

import "./App.css";
//import ArrayExamples from "./playground/ArrayExamples";
import { Route, Routes } from "react-router-dom";
import About from "./components/ReactRouter/About";
import Help from "./components/ReactRouter/Help";
import Policy from "./components/ReactRouter/Policy";
import NotFound from "./components/ReactRouter/NotFound";
import Header from "./components/Header/Header";
import NewEmployee from "./components/NewEmployee/NewEmployee";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";

//ArrayExamples.testArray();

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
        <Route path="/policy" element={<Policy></Policy>}></Route>
        <Route path="/newemp" element={<NewEmployee></NewEmployee>}></Route>
        <Route
          path="/emplist"
          element={<EmployeeTable></EmployeeTable>}
        ></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <hr></hr>
    </div>
  );
}
export default App;
