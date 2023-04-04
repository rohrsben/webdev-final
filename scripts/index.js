// Ben Rohrs
// Final project - Employee Registration

// make the "Add Record" button actually add a record
document.getElementById("add-record").onclick = function() {
    let employeeInfo = document.querySelectorAll("input.employee-data");
    
    // stores all the values into an array, for use with Employee's constructor
    newEmployeeAttributes = []
    for (attribute of employeeInfo) {
        newEmployeeAttributes.push(attribute.value);
    }

    // shove all the values into an object, because I think they're more fun to work with
    let newEmployee = new Employee(newEmployeeAttributes);

    let company = []
    if (sessionStorage.getItem("company")) {
        company = JSON.parse(sessionStorage.getItem("company"));
    }
    company.push(newEmployee);

    // save the stringified object, with a randomly generated ID to avoid collisions but still allow the user to enter employees with the same data
    sessionStorage.setItem("company", JSON.stringify(company));
}

function getRandomID() {
    let choices = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let output = "empl";
    for (let i = 0; i < 5; i++) {
        output += choices[Math.floor(Math.random() * 62)];
    }

    return output;
}