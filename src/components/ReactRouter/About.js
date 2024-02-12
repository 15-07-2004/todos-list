
               //React Router is a JavaScript library for building user interfaces that
               // navigate between different views based on the current URL. It is a popular choice for 
                //building single-page web applications (SPAs), which are applications that load all of their
                //content dynamically without refreshing the page.

import Employee from "../Employee/Employee";

const About = () => {
  // const empName = "Ankit Yadav";
  // const age = 19;
  // const joiningDate = new Date(2023, 7, 15);

  const users = [
    {
      name: "Ankit Yadav",
      age: 19,
      joinDate: new Date(2024, 6, 15),
    },
    {
      name: "Abhishek Varshney",
      age: 20,
      joinDate: new Date(2023, 8, 20),
    },
  ];
                            
  return (
    <div>
      <Employee
        empName={users[0].name}
        age={users[0].age}
        joiningDate={users[0].joinDate}
      ></Employee>
      <Employee
        empName={users[1].name}
        age={users[1].age}
        joiningDate={users[1].joinDate}
      ></Employee>
    </div>
  );
};

export default About;