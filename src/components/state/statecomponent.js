import { useState } from "react";//useState is a Hook that allow function component to access state and other react features
import ChildA from "../ContextApi/ChildA";

const Statecomponent = (props) => {
    const [title, setTitle] = useState(props.title);

    const [count, setCount] = useState(0);                               //Syntax of any Hook

    const updateclickhandler = () => {
        setTitle("This is updated !!");
    };
                               //<p> tag defines paragraph
    return (
        <div>
            <ChildA>
                                
            </ChildA>
            <p>{title}</p>
            <button onClick={updateclickhandler}>
                Click to update
                </button>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};
export default Statecomponent;