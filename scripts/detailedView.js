/*
    Ben Rohrs
    Final project - Employee Registration
*/

window.addEventListener("load", displayInfo);

// overview: for the detailed view, all info is stored in an html table,
//     where every row is a separate key/value pair. the url ? string is an
//     index relating to the 'company' array, which specifies which employee
//     is to be displayed.
function displayInfo() {
    // separate the index from the url, and pass it to 'company'
    let index = location.search.slice(1);
    let company = JSON.parse(sessionStorage.getItem("company"));
    let employee = company[index];
    // get the employee's full name as a header for the page
    let employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`
    document.getElementById("detailed-h1").textContent = employeeName;

    // read information from 'employee', and set it in the corresponding table cell
    let birthDate = document.getElementById("birth-date");
    birthDate.textContent = employee.birthDate;

    let ssn = document.getElementById("ssn");
    ssn.textContent = employee.ssn;

    let address1 = document.getElementById("address1");
    address1.textContent = employee.address1;

    let address2 = document.getElementById("address2");
    address2.textContent = employee.address2;

    let city = document.getElementById("city");
    city.textContent = employee.city;

    let state = document.getElementById("state");
    state.textContent = employee.state;

    let zip = document.getElementById("zip");
    zip.textContent = employee.zip;

    let homePhone = document.getElementById("home-phone");
    homePhone.textContent = employee.homePhone;

    let mobilePhone = document.getElementById("mobile-phone");
    mobilePhone.textContent = employee.mobilePhone;

    let email = document.getElementById("email");
    email.textContent = employee.email;

    let department = document.getElementById("department");
    department.textContent = employee.department;

    let currentPos = document.getElementById("current-position");
    currentPos.textContent = employee.currentPos;

    let workPhone = document.getElementById("work-phone");
    workPhone.textContent = employee.workPhone;

    let hireDate = document.getElementById("hire-date");
    hireDate.textContent = employee.hireDate; 
}