const Employeedate=(props) =>{
    return(
             <div className="div-date">
                <div>{props.empdate.toDateString()}</div>
             </div>
    );
}
export default Employeedate;