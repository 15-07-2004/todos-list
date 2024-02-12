                        //creating my employee section containing several column for entry of employee data 

const DataTable = (props) => {
  return (
    <table>
      <thead>
        <tr>                     
          <th>Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Address</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.department}</td>
            <td>{item.address}</td>
            <td>{item.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
 export default DataTable;

// tr tag define row in Html
// th tag define header cell contain header information
// td tag defne data cell