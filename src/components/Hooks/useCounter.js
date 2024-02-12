    // Hooks are the functions that use to extract feature from function components
                                                     //  Hook to update counter value each time

import { useState } from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return {count,increment,decrement};
};
export default useCounter;