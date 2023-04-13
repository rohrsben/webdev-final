/*
    Ben Rohrs
    Final project - Employee Registration
*/

function Employee(empAttrs) {
    // personal info
    this.firstName = empAttrs[0];
    this.middleName = empAttrs[1];
    this.lastName = empAttrs[2];
    this.birthDate = empAttrs[3];
    this.ssn = empAttrs[4];

    // address
    this.address1 = empAttrs[5];
    this.address2 = empAttrs[6];
    this.city = empAttrs[7];
    this.state = empAttrs[8];
    this.zip = empAttrs[9];

    // contact info
    this.homePhone = empAttrs[10];
    this.mobilePhone = empAttrs[11];
    this.email = empAttrs[12];

    // company info
    this.department = empAttrs[13];
    this.currentPos = empAttrs[14];
    this.workPhone = empAttrs[15];
    this.hireDate = empAttrs[16];
}
