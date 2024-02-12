import { useState } from "react";
import ChildB from "./ChildB";
import { MyContext } from "./MyContext";

const ChildA = () => {
  const [text, setText] = useState("This is context Api");  //display as heading

                                // provider create context that to be consumed by other i.e, Child B

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <ChildB />
      </MyContext.Provider>
    </div>
  );
};
export default ChildA;