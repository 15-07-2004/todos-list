import { useState } from "react";

import { useForm } from "react-hook-form";
import "./NewEmployee.css";

//create form to add New Employee details in Add New Employee detail section

function NewEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [empInfo, setEmpInfo] = useState();
  const submitHandler = (data) => {
    setEmpInfo(data);
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(empInfo)}</pre>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <div>
            <label>Employee Name</label>
            <input
              type="text"
              name="empName"
              placeholder="Employee Name"        //Placeholder is short hint of expected value of input
              {...register("empName", {                     // type of register form
                required: "can't empty",
              })}
            />
          </div>
          <p className="error">{errors.empName?.message}</p>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
            />
          </div>
          <p className="error">{errors.email?.message}</p>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 charachters",
                },
                maxLength: {
                  value: 10,
                  message: "Password not exceed more than 10 charachters",
                },
              })}
            />
          </div>
          <p className="error">{errors.password?.message}</p>

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default NewEmployee;