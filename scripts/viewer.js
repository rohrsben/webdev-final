/*
    Ben Rohrs
    Final project - Employee Registration
*/

window.addEventListener("load", createListItems);

// overview: populate 'company' with test data so I don't have to enter it manually
document.getElementById("gen-data").onclick = function () {
    let company = [];
    if (sessionStorage.getItem("company")) {
        company = JSON.parse(sessionStorage.getItem("company"));
    }

    for (let i = 0; i < 10; i++) {
        company.push(genHuman());
    }

    sessionStorage.setItem("company", JSON.stringify(company));
    createListItems();

    function picker(arg) {
        return arg[Math.floor(Math.random() * arg.length)];
    }

    function genHuman() {
        let fn = ["James", "Robert", "John", "Michael", "David", "William", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara"];
        let ln = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller"];
        let c = ["Gladstone", "Kansas City", "Liberty"]
        let s = ["Kansas", "Missouri"]
        let z = ["64119", "64118", "64151", "64155"]

        let empAttrs = [picker(fn), picker(fn), picker(ln), "04/01/2023", "000-00-0000", "123 washington", "Apt. 3", picker(c), picker(s), picker(z), "000-000-0000", "000-000-0000", "test@gmail.com", "Sales", "Teleprompter", "000-000-0000", "04/01/2023"]
        let nE = new Employee(empAttrs);

        return nE;
    }
}

// overview: create a short listing for every entry in 'company', which is clickable for a detailed view
function createListItems() {
    // get the ul element (where the listings will go) and company object
    let employeeList = document.getElementById("short-listings");
    let company = JSON.parse(sessionStorage.getItem("company"));

    // if company is null, then no employees have been added; inform the user as such
    if (company === null) {
        document.getElementById("empty-message").textContent = "No employees found!";
    } else {
        // if employees are found, make sure "No employees found!" is not displayed
        document.getElementById("empty-message").textContent = "";

        // overview: for every entry in 'company', create a clickable li element
        for (let i = 0; i < company.length; i++) {
            // create the li
            let newListing = document.createElement("li");
            // get the name of the currently indexed employee
            let currentEmpl = company[i];
            let employeeName = `${currentEmpl.firstName} ${currentEmpl.lastName}`;
            
            // set the li title to the employee's name
            newListing.textContent = employeeName;
            // add a class for themeing
            newListing.className = "clickable";
            // when clicked, open the relevant employee's detailed view
            newListing.onclick = function () {
                window.open( `detailedView.html?${i}` )
            }
            // add the li to the 'short-listings' ul
            employeeList.appendChild(newListing);
        }
    }
}