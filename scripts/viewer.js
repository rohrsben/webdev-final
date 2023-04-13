/*
    Ben Rohrs
    Final project - Employee Registration
*/

window.addEventListener("load", createListItems);

// this button is just for when I design the css, so I don't have to do this manually
document.getElementById("gen-data").onclick = function() {
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
        return arg[Math.floor( Math.random() * arg.length )];
    }

    function genHuman() {
        let fn = ["James", "Robert", "John", "Michael", "David", "William", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara"];
        let ln = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller"];
        let c = ["Gladstone", "Kansas City", "Liberty"]
        let s = ["Kansas", "Missouri"]
        let z = ["64119", "64118", "64151", "64155"]
        
        let empAttrs = [picker(fn), picker(fn), picker(ln), "04/01/2023", "123 washington", "Apt. 3", picker(c), picker(s), picker(z), "123", "456", "test@gmail.com", "Sales", "Teleprompter", "789", "04/01/2023"]
        let nE = new Employee(empAttrs);
    
        return nE;
    }
}

// adds a list item for each currently saved employee of their name
function createListItems() {
    let employeeList = document.getElementById("short-listings");
    let company = JSON.parse(sessionStorage.getItem("company"));

    // if company is null, then no employees have been added; inform the user as such
    if (company === null) {
        document.getElementById("empty-message").textContent = "No employees found!";
    } else {
        document.getElementById("empty-message").textContent = "";

        for (let i = 0; i < company.length; i++) {
            let currentEmpl = company[i];
            let employeeName = `${currentEmpl.firstName} ${currentEmpl.lastName}`;
    
            let newListing = document.createElement("li");

            newListing.textContent = employeeName;
            newListing.className = "clickable";
            newListing.onclick = function() {
                window.open( linkCreator(i) )
            }
            
            employeeList.appendChild(newListing);
        }
    }
}

function linkCreator(employeeIndex) {
    let link = `detailedView.html?${employeeIndex}`;

    return link;
}