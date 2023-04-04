// Ben Rohrs
// Final project - Employee Registration

window.addEventListener("load", createListItems);

document.getElementById("gen-data").onclick = function() {
    let company = JSON.parse(sessionStorage.getItem("company"));
    for (let i = 0; i < 10; i++) {
        let x = genHuman();
        console.log(x);
        company.push(x);
    }

    sessionStorage.setItem("company", JSON.stringify(company));
    createListItems();
}

function createListItems() {
    let parentList = document.getElementById("small-listings");
    let company = JSON.parse(sessionStorage.getItem("company"));

    for (let i = 0; i < company.length; i++) {
        let currentEmpl = company[i];
        let employeeName = `${currentEmpl.firstName} ${currentEmpl.middleName} ${currentEmpl.lastName}`;

        let newListing = document.createElement("li");
        newListing.textContent = employeeName;
        parentList.appendChild(newListing);
    }
}



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