import { useContext } from "react";
import { MyContext } from "./MyContext";

function ChildC() {
  const { text, setText } = useContext(MyContext);

  const clickHandler = () => {
    setTimeout(() => {
      setText("Updated via context Api!");
    }, 2000);                                               //button update after every 2000msec = 2sec
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={clickHandler}>Text Context Api</button>          
    </div>
  );
}

export default ChildC;

//click handler call function and perform operation on button