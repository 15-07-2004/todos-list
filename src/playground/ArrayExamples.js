const ArrayExamples = {
    testArray() {
        console.log("hello");

        let carsArray = ["maruti", "toyota", "hyundai"];
        const carIndex = carsArray.findIndex((car) => car == "maruti")
        console.log(carIndex);          //print message that is to be displayed to user

        const employeeArr = [
            {
                name: "Ankit",
                adress: "Noida",
            },
            {
                name: "Yadav",
                adress: "Delhi",
            },
        ];
        const emp = employeeArr.filter(emp => emp.name == "Yadav");        //filter give output from range of function
        console.log(emp);

        var mapArray = employeeArr.map((user) => {      // run function on each item
            user.name = user.name + "!!";
            return user;
        });
        console.log(mapArray);
                                    //object destructuring(taking only important object from array)
    }
};
export default ArrayExamples;