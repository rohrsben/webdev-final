/*
    Ben Rohrs
    Final project - Employee Registration
*/

window.addEventListener("load", displayInfo);

function displayInfo() {
    let index = location.search.slice(1);
    let company = JSON.parse(sessionStorage.getItem("company"));
    let employee = company[index];
    let employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`

    document.getElementById("detailed-h1").textContent = employeeName;
    let infoDiv = document.getElementById("detailed-info");

    let birthDate = document.createElement("p");
    birthDate.textContent = `Birth Date: ${employee.birthDate}`;
    infoDiv.appendChild(birthDate);

    let ssn = document.createElement("p");
    ssn.textContent = `Social Security Number: ${employee.ssn}`;
    infoDiv.appendChild(ssn);

    let address1 = document.createElement("p");
    address1.textContent = `Address 1: ${employee.address1}`;
    infoDiv.appendChild(address1);

    let address2 = document.createElement("p");
    address2.textContent = `Address 2: ${employee.address2}`;
    infoDiv.appendChild(address2);

    let city = document.createElement("p");
    city.textContent = `City: ${employee.city}`;
    infoDiv.appendChild(city);

    let state = document.createElement("p");
    state.textContent = `State: ${employee.state}`;
    infoDiv.appendChild(state);

    let zip = document.createElement("p");
    zip.textContent = `ZIP code: ${employee.zip}`;
    infoDiv.appendChild(zip);

    let homePhone = document.createElement("p");
    homePhone.textContent = `Home Phone: ${employee.homePhone}`;
    infoDiv.appendChild(homePhone);

    let mobilePhone = document.createElement("p");
    mobilePhone.textContent = `Mobile Phone: ${employee.mobilePhone}`;
    infoDiv.appendChild(mobilePhone);

    let email = document.createElement("p");
    email.textContent = `Email Address: ${employee.email}`;
    infoDiv.appendChild(email);

    let department = document.createElement("p");
    department.textContent = `Department: ${employee.department}`;
    infoDiv.appendChild(department);

    let currentPos = document.createElement("p");
    currentPos.textContent = `Current Position: ${employee.currentPos}`;
    infoDiv.appendChild(currentPos);

    let workPhone = document.createElement("p");
    workPhone.textContent = `Work Phone: ${employee.workPhone}`;
    infoDiv.appendChild(workPhone);

    let hireDate = document.createElement("p");
    hireDate.textContent = `Hire Date: ${employee.hireDate}`;
    infoDiv.appendChild(hireDate);
}