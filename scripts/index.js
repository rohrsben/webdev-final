/*
    Ben Rohrs
    Final project - Employee Registration
*/

// give focus to the "first name" input when the window loads
window.addEventListener("load", function() {
    document["new-employee"].elements["first-name"].focus();
})

// attach submitter() to the "add record" button when its clicked
document.getElementById("add-record").addEventListener("click", submitter);

function submitter() {
    // run the validators to make sure the form is valid
    validateSSN();
    validateZip();
    validatePhone("home-phone");
    validatePhone("mobile-phone");
    validatePhone("work-phone");
    validateEmail();

    // if it is, add the new record to the session storage
    let formIsValid = document["new-employee"].reportValidity();
    if ( formIsValid ) {
        addRecord();

        // since the record was successfully added, reset the form
        document["new-employee"].reset();
    }
}

// the validate functions all work in the same way:
//      1. acquire the relevant html input element
//      2. compare the value to a preset regular expression
//      3. if the comparison fails, set a custom validity message
//         if it passes, remove said message
function validateSSN() {
    let ssn = document.getElementById("ssn"); // (1)
    let ssnRegex = /^\d{3}-\d{2}-\d{4}$/;

    let inputFails = !ssnRegex.test(ssn.value); // (2)
    if ( inputFails ) { // (3)
        ssn.setCustomValidity("Please enter a social security number in the form 000-00-0000.");
    } else {
        ssn.setCustomValidity("");
    }
}

function validateZip() {
    let zip = document.getElementById("zip");
    let zipRegex = /^\d{5}$/;

    // inputFails or !inputIsValid? a readability debate for the ages
    let inputFails = !zipRegex.test(zip.value);
    if ( inputFails ) {
        zip.setCustomValidity("Please enter a valid ZIP code.");
    } else {
        zip.setCustomValidity("");
    }
}

function validatePhone(elementID) {
    let phone = document.getElementById(elementID);
    let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    let inputFails = !phoneRegex.test(phone.value);
    if ( inputFails ) {
        phone.setCustomValidity("Please enter a phone number in the form 000-000-0000.");
    } else {
        phone.setCustomValidity("");
    }
}

function validateEmail() {
    let email = document.getElementById("email-address");
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,}$/

    let inputFails = !emailRegex.test( email.value.toLowerCase() );
    if ( inputFails ) {
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }
}

// from form data, create an Employee object and add it to session storage
function addRecord() {
    // get the data from the form
    let employeeInfo = document.querySelectorAll("input.employee-data");
    
    // store all the values into an array, for use with Employee's constructor
    newEmployeeAttributes = [];
    for (attribute of employeeInfo) {
        newEmployeeAttributes.push(attribute.value);
    }

    // use the aforementioned list of employee values to construct a new employee
    //      the future is now
    let newEmployee = new Employee(newEmployeeAttributes);

    // "company" is the key name used to store all created employees in session storage.
    //      if it already exists (because an employee has already been created),
    //      load the old version so it doesn't get overwritten
    let company = [];
    if (sessionStorage.getItem("company")) {
        company = JSON.parse(sessionStorage.getItem("company"));
    }
    // add the new record to the company array
    company.push(newEmployee);

    // stringify the whole company and save it to session storage
    sessionStorage.setItem("company", JSON.stringify(company));
}