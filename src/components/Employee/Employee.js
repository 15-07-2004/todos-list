
import "./Employee.css";
import Employeedate from "../splitting component/employeedate";
import Statecomponent from "../state/statecomponent";
import useCounter from "../Hooks/useCounter";

function Employee(props) {        // props stand for properties  to transfer data from parent to child
   const {count,increment,decrement}=useCounter(0);
                                        //div is used as container
    return (
             <div className="wrapper">                           
            <h2>Heading 1</h2>
            <div>Employee Name</div>             
            <div>{props.empName}</div>
            <hr></hr>

            <div>Age</div>
            <div>{props.age}</div>
            <hr></hr>

            <div>Joining Date</div>
            <Employeedate empdate={props.joiningDate}/>
              <hr></hr>

              <Statecomponent title={props.empName}></Statecomponent>
              <hr></hr>
        <div>
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
        </div>
    );
}
export default Employee;                        //to import any folder it must be exported



 